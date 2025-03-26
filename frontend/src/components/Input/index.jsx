import React from "react";
import { StyledInput } from "./style";

const Input = ({
  height,
  width,
  size,
  placeholder,
  onChange,
  value,
  type = "text",
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      height={`${height}px`}
      width={`${width}px`}
      size={`${size}px`}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
