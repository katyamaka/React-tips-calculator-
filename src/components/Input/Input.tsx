import React, { ChangeEvent, useEffect } from "react";
import { StyledInput } from "./styles";

interface InputProps {
  $placeholder: string;
  $value: string;
  callbackInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (
  { $placeholder, $value, callbackInput }: InputProps,
  {}
) => {
  // useEffect(() => {
  //   if (String($value).length < 1) {

  //   }
  // }, []);

  return (
    <StyledInput
      value={$value}
      placeholder={$placeholder}
      onChange={callbackInput}
    />
  );
};
