import React from 'react';
import { useGlobal } from "../../contexts";

export default function Prize() {
    const [states]=useGlobal();
    return <div       style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 90,
        paddingRight: 40,
      }}>{states.prize.length === 0 ? 'Vous n\'avez pour l\'instant pas de prix.' : states.prize}</div>;
  }
  