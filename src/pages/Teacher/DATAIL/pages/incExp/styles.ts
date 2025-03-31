import styled from "styled-components";
import { GroupCardProps } from "./types";

export const GroupCardCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;
  padding-right: 40px;
`;
export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  flex: 1;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatars = styled.div<{ image: GroupCardProps["image"] }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  background: #e6e0f4;
  color: #2c2669;
  ${(props: any) =>
    props?.image && `background: url(${props?.image}) center/cover no-repeat;`}
`;

export const Title = styled.h2`
  color: #2c2669;
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.p`
  font-size: 14px;
  color: #2c2669;
  margin: 5px 0;
`;

export const Tag = styled.span`
  background: #e6e0f4;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  color: #2c2669;
`;

export const Divider = styled.hr`
  border: 0.5px solid #d3cce6;
  margin: 10px 0;
`;

export const Button = styled.button`
  background: #2c2669;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
`;