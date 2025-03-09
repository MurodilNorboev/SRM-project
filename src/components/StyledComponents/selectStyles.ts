import styled from "styled-components";
import { SelectProps } from "./types";

export const CustomSelect = styled.select<SelectProps>`
  color: black;
  border-radius: 8px;
  border: 1px solid var(--200, #cfcbea);
  background: var(--100, #efeef8);
  padding: ${(props) => props.padding || "8px 12px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: 14px;
  font-weight: 500;
  appearance: none; /* To remove the default arrow in some browsers */
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
    border-color: #918fc3;
  }

  &::-ms-expand {
    display: none; /* Remove the default dropdown arrow in Internet Explorer */
  }

  /* Custom dropdown arrow */
  &::after {
    content: "▼";
    font-size: 12px;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  /* On hover */
  &:hover {
    border-color: #918fc3;
  }

  /* When focused */
  &:focus-visible {
    border-color: #3a317a;
  }
`;

export const CustomOption = styled.option`
  color: black;
  background: #efeef8;
  padding: 10px;

  &:hover {
    background-color: #d0d0d0;
  }
`;
