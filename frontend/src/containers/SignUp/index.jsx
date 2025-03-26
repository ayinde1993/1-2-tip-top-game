import React, { useEffect, useState } from "react";
import User from "../../components/Icons/User";
import Colors from "../../utils/constants/colors";

import GoogleButton from "react-google-signin-button";
import "react-google-signin-button/dist/button.css";
import FacebookLogin from "@greatsumini/react-facebook-login";
import Input from "../../components/Input";
import CreateAccountBtn from "../../components/CreateAccountBtn";
import axios from "axios";
import { ActionsTypes, useGlobal } from "../../contexts";
import { useNavigate } from "react-router-dom";

import styles from "../../styles/Signup/Signup.module.css";
import { isMobile } from "react-device-detect";

export default function SignUp() {
  const [states, dispatch] = useGlobal();
  const navigate = useNavigate();
  const [internalStep, setInternalStep] = useState(
    states.email.length > 0 ? 1 : 0
  );
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (states.token.length > 0) {
      navigate("/profile");
    }
  }, []);

  const handleCreateAccount = () => {
    if (name !== "" && lastname !== "" && email !== "" && password !== "") {
      setInternalStep(0);
    }
    axios
      .post("http://46.202.168.187:5000/auth/register", {
        userName: name + " " + lastname,
        lastname,
        email,
        password,
      })
      .then((res) => {
        if (res.data?.token) {
          setInternalStep(1);
          dispatch({
            type: ActionsTypes.UPDATE,
            props: {
              firstname: res?.user.userName.split(" ")[0],
              lastname: res?.user.userName.split(" ")[1],
              email,
              phoneNumber: res?.user.phone,
            },
          });
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.error(
          "Error =>",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <div className={styles.body}>
      <div className={styles.leftPartContainer}>
        <div
          className={styles.title}
          style={{
            color: Colors.darkGreen,
          }}
        >
          Thé Tip Top Un thé bio.. Un geste pour la planète..
        </div>
        <div
          className={styles.text}
          style={{
            backgroundColor: Colors.gray,
          }}
        >
          <p>
            The Tip Top vous propose un jeu-concours pour vous fediliser et
            répondre à vos eventuels besoin, et vous faire découvrire ses
            différentes gammes de thé de très grande qualité, elle est parmi les
            leaders dans le domaine. à vous de tenter votre chance.
          </p>
          <p style={{ color: Colors.darkGreen, fontWeight: 700 }}>
            Lire la suite...
          </p>
        </div>
        <div
          className={styles.testimonialsContainer}
          style={{
            backgroundColor: Colors.gray,
          }}
        >
          <div
            className={styles.testimonialsTitle}
            style={{
              color: Colors.darkGreen,
            }}
          >
            Témoignages
          </div>
          <div>
            <div className={styles.testimonialsSubContainer}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: Colors.lightGreen,
                }}
              >
                <User />
              </div>
              <div className={styles.testimonialsText}>
                <div
                  className={styles.text2}
                  style={{
                    color: Colors.darkGreen,
                  }}
                >
                  Théo Sabatier
                </div>
                <div className={styles.text3}>
                  Thé tip top, très bonne qualité, bon service, rien à
                  recomander, je recomende fortement.
                </div>
              </div>
            </div>
            <div className={styles.testimonialsSubContainer}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: Colors.lightGreen,
                }}
              >
                <User />
              </div>
              <div className={styles.testimonialsText}>
                <div
                  className={styles.text2}
                  style={{
                    color: Colors.darkGreen,
                  }}
                >
                  Amal Siraj
                </div>
                <div className={styles.text3}>
                  Thé tip top, très bonne qualité, bon service, rien à
                  recomander, je recomende fortement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightPartContainer}>
        <div
          className={styles.rightPartSubContainer}
          style={{
            backgroundColor: Colors.lightGreen,
          }}
        >
          <div className={styles.socialMediaBtns}>
            <GoogleButton
              label="Connexion avec Google"
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
            <FacebookLogin
              appId="1088597931155576"
              onSuccess={(response) => {
                console.log("Login Success!", response);
              }}
              onFail={(error) => {
                console.log("Login Failed!", error);
              }}
              onProfileSuccess={(response) => {
                console.log("Get Profile Success!", response);
              }}
              className={styles.fbBtn}
            />
          </div>
          <div
            className={styles.orContainer}
            style={{
              color: Colors.white,
            }}
          >
            OU
          </div>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.inputSubContainer}>
                <Input
                  width={isMobile ? 300 : 219}
                  height={56}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Nom..."
                />
                <Input
                  width={isMobile ? 300 : 219}
                  height={56}
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  placeholder="Prénom..."
                />
              </div>
              <Input
                width={isMobile ? 300 : 473}
                height={56}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Adresse mail..."
              />
              <Input
                width={isMobile ? 300 : 473}
                height={56}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Mot de passe..."
              />
            </div>
            <div>
              <CreateAccountBtn onClick={() => handleCreateAccount()}>
                Créer un compte
              </CreateAccountBtn>
            </div>
          </div>
          <div style={{ color: Colors.white, paddingLeft: 20 }}>
            Déjà un compte ?{" "}
            <a
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Connectez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
