import { useState } from "react";
import { ActionsTypes, useGlobal } from "../../contexts";
import styles from "../../styles/Edit/Edit.module.css";
import axios from "axios";

export default function Edit() {
  const [{ email, firstname, lastname, phone, token }, dispatch] = useGlobal();
  const [newEmail, setNewEmail] = useState(email);
  const [newFirstname, setNewFirstname] = useState(firstname);
  const [newLastname, setNewLastname] = useState(lastname);
  const [newPhone, setNewPhone] = useState(phone);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleValidate = () => {
    console.log("firstname => ", newFirstname);
    axios
      .put(
        "http://46.202.168.187:5000/user/updateprofile",
        {
          userName: newFirstname + " " + newLastname,
          email: newEmail,
          phone: newPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setIsButtonClicked(true);
        if (res.data?.success) {
          setMessageSuccess(res.data?.message);
          dispatch({
            type: ActionsTypes.UPDATE,
            props: {
              firstname: newFirstname,
              lastname: newLastname,
              email: newEmail,
              phone: newPhone,
            },
          });
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
  return (
    <div className={styles.body}>
      <h2>Modification données du compte</h2>
      {isButtonClicked && messageSuccess.length > 0 ? <p style={{color:'green'}}>{messageSuccess}</p> : <p style={{color:'red'}}>{messageError}</p>}
      <div className={styles.container}>
        <input
          placeholder="Email"
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
        />
        <input
          placeholder="Prénom"
          onChange={(e) => setNewFirstname(e.target.value)}
          value={newFirstname}
        />
        <input
          placeholder="Nom"
          onChange={(e) => setNewLastname(e.target.value)}
          value={newLastname}
        />
        <input
          type="number"
          placeholder="Téléphone"
          onChange={(e) => setNewPhone(e.target.value)}
          value={newPhone}
        />

        <button onClick={handleValidate}>Valider</button>
      </div>
    </div>
  );
}
