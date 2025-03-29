import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  align-items: center;
  padding: 0px 40px;
  border-radius: 8px;
`;

export const ResetButton = styled.button`
  border: 1px solid #d8d6ff;
  border-radius: 6px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a29bfe;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  width: 125px;
  height: 44px;
  flex-shrink: 0;

  &:hover {
    color: #6c5ce7;
  }
`;
