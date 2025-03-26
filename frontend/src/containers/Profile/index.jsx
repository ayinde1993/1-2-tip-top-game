import React, { useEffect } from "react";
import User from "../../components/Icons/User";
import Colors from "../../utils/constants/colors";

import "react-google-signin-button/dist/button.css";
import GoGameButton from "../../components/GameButton";
import { ActionsTypes, useGlobal } from "../../contexts";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [states, dispatch] = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    if (states.token.length == 0) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    dispatch({
      type: ActionsTypes.CLEAN,
    });
    navigate('/');
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.green,
              borderRadius: 150,
              padding: 20,
              width: 200,
              height: 200,
            }}
          >
            <User width={178} height={188} weight={1} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "60%",
            gap: 30,
          }}
        >
          <div
            style={{ fontSize: 48, fontWeight: 800, color: Colors.darkGreen }}
          >
            {states.firstname} {states.lastname}
          </div>
          <div
            style={{ fontSize: 20, fontWeight: 800, color: Colors.darkGreen }}
          >
            {states.email}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 550,
            }}
          >
            <GoGameButton goTo="edit">Modifier mon profil</GoGameButton>
            <GoGameButton goTo="prize">Voir mes gains</GoGameButton>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "30%",
        }}
      >
        <button onClick={handleLogout}>deconnexion</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            height: "70%",
            backgroundColor: Colors.gray,
            borderRadius: 10,
            fontSize: 18,
          }}
        >
          <p style={{ width: 825, height: 75 }}>
            The Tip Top vous propose un jeu-concours pour vous fediliser et
            répondre à vos eventuels besoin, et vous faire découvrire ses
            différentes gammes de thé de très grande qualité, elle est parmi les
            leaders dans le domaine. à vous de tenter votre chance.
          </p>
        </div>
      </div>
    </div>
  );
}
