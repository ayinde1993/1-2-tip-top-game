import React from "react";
import { useNavigate } from "react-router-dom";

const GoGameButton = ({ children, goTo }) => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        backgroundColor: "#6BA614",
        width: 219,
        height: 56,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 500,
      }}
      onClick={() => navigate(`/${goTo}`)}
    >
      {children}
    </button>
  );
};

export default GoGameButton;
