import styled from "styled-components";
import { ButtonProps } from "./types";

export const CustomButton = styled.button<ButtonProps>`
  border-radius: 6px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    #2c2669;
  color: white;
  border: none;
  padding: ${(props) => props.padding || "10px 20px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "40px"};
  cursor: pointer;

  &:hover {
    background: #3a317a;
  }
`;

export const CustomWhiteButton = styled.button<ButtonProps>`
  border-radius: 6px;
  background: var(--50, #fff);
  color: var(--600, #2c2669);
  text-align: center;
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  border: ${(props) => props.border || '1px solid var(--600, #2C2669)'};
  padding: ${(props) => props.padding || "10px 20px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "40px"};
  cursor: pointer;

  &:hover {
    background: #3a317a;
    color: #fff;
  }
`;

export const CustomBinafshaButton = styled.button<ButtonProps>`
  border-radius: 6px;
  border: border 1px solid #A098D9;
  background: var(--50, #A098D5);
  color: var(--600, #EFEEF8);
  text-align: center;
  font-family: inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; 
  border: ${(props) => props.border || '1px solid var(--600, #2C2669)'};
  padding: ${(props) => props.padding || "10px 20px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "40px"};
  cursor: pointer;

  &:active {
    scale: 0.99;
  }
  &:hover {
    background: #a098d8;
    color: #fff;
  }
`;
