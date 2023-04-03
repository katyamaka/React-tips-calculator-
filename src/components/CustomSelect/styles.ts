import styled from "styled-components";
import { StylesConfig } from "react-select";
import { EventProp } from "../Form/Form";

export const selectStyle: StylesConfig<EventProp, false> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "68px",
    textAlign: "center",
    border: "none",
    borderRadius: "34px",
    fontSize: "18px",
  }),
};
