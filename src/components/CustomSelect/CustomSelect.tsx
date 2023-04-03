import React, { useState } from "react";
import { selectStyle } from "./styles";
import Select, { SingleValue } from "react-select";
import { EventProp } from "../Form/Form";

interface CustomSelectProps {
  tips: EventProp;
  handleTipsSelect: (option: SingleValue<EventProp>) => void;
  options: EventProp[];
}
export const options: EventProp[] = [
  { value: 1.1, label: "10%" },
  { value: 1.15, label: "15%" },
  { value: 1.2, label: "20%" },
];

export const CustomSelect = ({ options }: CustomSelectProps) => {
  return (
    <Select options={options} defaultValue={options[0]} styles={selectStyle} />
  );
};
