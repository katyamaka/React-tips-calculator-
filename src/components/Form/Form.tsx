import React, { ChangeEvent, useState } from "react";
import { SingleValue } from "react-select";
import { Title, Subtitle, Total, AppInputs } from "./styles";
import { Input } from "../Input/Input";
import { CustomSelect, options } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";

export interface EventProp {
  value: number;
  label: string;
}

export const Form = () => {
  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [tips, setTips] = useState(options[0]);
  const [total, setTotal] = useState("0, 00");

  const handleBillInput = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const handlePersonInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value);
  };

  const handleTipsSelect = (event: SingleValue<EventProp>) => {
    if (event) {
      setTips(event);
    }
  };

  const countTotal = () => {
    if (Number(bill) > 0)
      setTotal(
        String(
          ((Number(bill) * Number(tips.value)) / Number(persons)).toFixed(2)
        )
      );
    if (Number(persons) == 0 && Number(bill) > 0) {
      setTotal(String("You got fooled bro, go pay the bill"));
    }
    if (Number(persons) > 0 && Number(bill) == 0) {
      setTotal(String("Guests had a 0 bill, so you can have your 0"));
    }
  };

  return (
    <>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <AppInputs>
        <Input
          $placeholder="Enter bill"
          $value={bill}
          callbackInput={handleBillInput}
        />
        <Input
          $placeholder="Enter persons"
          $value={persons}
          callbackInput={handlePersonInput}
        />
      </AppInputs>
      <CustomSelect
        handleTipsSelect={handleTipsSelect}
        tips={tips}
        options={options}
      />
      <Total>Total: {total}$</Total>
      <Button onClick={countTotal} />
    </>
  );
};
