import styled from "styled-components";

export const LeadContainer = styled.div`
  display: grid;
  gap: 40px;
  height: 100%;
  transition: background-color 0.3s ease;
`;

export const ToggleButton = styled.button`
background: #6c5ce7;
color: white;
border: none;
padding: 10px 16px;
font-size: 14px;
border-radius: 8px;
cursor: pointer;
margin-bottom: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VMENU = styled.button<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 60px;
  border-radius: 0px 6px 6px 0px;
  border: 1px solid var(--600, #2c2669);
  background: ${({ $active }) => ($active ? "#2C2669" : "#FFF")};
`;

export const HMENU = styled.button<{ $active: boolean }>`
  border-radius: 6px 0px 0px 6px;
  border: 1px solid var(--600, #2c2669);
  height: 45px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $active }) => ($active ? "#2C2669" : "#FFF")};
`;