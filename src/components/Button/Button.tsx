import { StyledButton } from "./styles";
import React, { useEffect } from "react";
import { Input } from "../Input/Input";
import { InputProps } from "react-select";

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Oooohhoo
    </StyledButton>
  );
};
