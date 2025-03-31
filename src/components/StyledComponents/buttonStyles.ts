import styled from "styled-components";
import { ButtonProps } from "./types";

export const CustomButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: ${(props) => props.width || "162px"};
  min-width: ${(props) => props.width || "162px"};
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
  border: ${(props) => props.border || "1px solid var(--600, #2C2669)"};
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
  border: border 1px solid #a098d9;
  background: var(--50, #a098d5);
  color: var(--600, #efeef8);
  text-align: center;
  font-family: inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  border: ${(props) => props.border || "1px solid var(--600, #2C2669)"};
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

export const BtnWrapper = styled.div`
  display: flex;
`;

export const VMENU = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "60px"};
  border-radius: 0px 6px 6px 0px;
  border: ${(props) => props.border || "1px solid var(--600, #2c2669)"};
  background: ${({ $active }) => ($active ? "#2C2669" : "#FFF")};
  color: ${(props) => props.border || "#2C2669"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export const MIDDLE = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "60px"};
  border: ${(props) => props.border || "1px solid var(--600, #2c2669)"};
  background: ${({ $active }) => ($active ? "#2C2669" : "#FFF")};
  color: ${(props) => props.border || "#2C2669"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export const HMENU = styled.button<ButtonProps>`
  border-radius: 6px 0px 0px 6px;
  border: ${(props) => props.border || "1px solid var(--600, #2c2669)"};
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "60px"};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $active }) => ($active ? "#2C2669" : "#FFF")};
  color: ${(props) => props.border || "#2C2669"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
