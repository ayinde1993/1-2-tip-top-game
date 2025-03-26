import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: 740px;
  top: 337px;

  background: #f2f2f2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-left: 20px;
  font-size: ${({ size }) => size};
`;
