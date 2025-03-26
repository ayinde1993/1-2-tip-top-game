import axios from "axios";
import Input from "../../components/Input";
import Colors from "../../utils/constants/colors";
import React, { useEffect, useState } from "react";
import { ActionsTypes, useGlobal } from "../../contexts";
import CreateAccountBtn from "../../components/CreateAccountBtn";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

export default function Game() {
  const [states, dispatch] = useGlobal();
  const [code, setCode] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);

  const navigate = useNavigate();

  const handleValidate = () => {
    axios
      .post(
        "http://46.202.168.187:5000/recordGame/jeux",
        {
          ticketNumber: code,
        },
        {
          headers: {
            Authorization: `Bearer ${states.token}`,
          },
        }
      )
      .then((res) => {
        setIsButtonClicked(true);
        if (res.data?.ticket) {
          setMessageSuccess(res.data?.message);
          dispatch({
            type: ActionsTypes.UPDATE,
            props: {
              ticketCode: res.data?.ticket,
              prize: res.data?.message,
            },
          });
          setIsCodeValid(true);
        }
      })
      .catch((error) => {
        setIsButtonClicked(true);
        setMessageError(error.response.data.message);
        console.error(
          "Error =>",
          error.response ? error.response.data : error.message
        );
      });
  };

  useEffect(() => {
    if (states.email.length === 0) {
      navigate("/profile");
    }
  }, [states.email]);

  return (
    <>
      {isCodeValid && <Confetti width={1400} height={800} recycle={true} />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 90,
          paddingRight: 40,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
        >
          <Input
            width={219}
            height={56}
            onChange={(e) => setCode(e.target.value)}
            value={code}
            placeholder="Code..."
          />
          <CreateAccountBtn onClick={handleValidate}>Valider</CreateAccountBtn>
        </div>
        {isButtonClicked ? (
          messageSuccess.length > 0 ? (
            <p style={{ color: Colors.lightGreen }}>{messageSuccess}</p>
          ) : (
            <p style={{ color: "red" }}>{messageError}</p>
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
