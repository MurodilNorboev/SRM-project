import styled from "styled-components";
import { InputProps } from "./types";

export const CustomLabel = styled.label`
  align-self: stretch;
  color: var(--500, #6053b9);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const CustomInput = styled.input<InputProps>`
  color: black;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.error ? "red" : "var(--200, #cfcbea)")};
  background: var(--100, #efeef8);
  padding: ${(props) => props.padding || "8px 12px"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "red" : "#918fc3")};
  }

  &::placeholder {
    color: ${(props) => (props.error ? "red" : "#c0c0c0")};
  }
`;

export const HelperText = styled.div<InputProps>`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  visibility: ${(props) => (props.helperText ? "visible" : "hidden")};
`;

export const CustomSearchInput = styled.input<InputProps>`
  padding: 8px 12px;
  border: 1px solid #d8d6ff;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  outline: none;
  width: ${(props) => props.width || "180px"};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "44px"};
  flex-shrink: 0;
`;
