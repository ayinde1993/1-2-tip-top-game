import React from 'react';
import Colors from "../../utils/constants/colors";

const CreateAccountBtn = ({ children, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: Colors.gray,
        color: Colors.darkGreen,
        width: 219,
        height: 56,
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 500,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CreateAccountBtn;
