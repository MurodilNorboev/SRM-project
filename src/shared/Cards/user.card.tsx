import React from "react";
import styled from "styled-components";

interface UserCardProps {
  name: string;
  id: string;
  phone: string;
  branch: string;
  addedAt: string;
  balance: string;
}

const CardWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ccc;
  position: relative;
`;

const Balance = styled.div`
  font-size: 14px;
  background: #eaf2ff;
  padding: 5px 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #555;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const UserName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 30px;
`;

const UserInfo = styled.p`
  font-size: 14px;
  color: #555;
  margin: 4px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

const Button = styled.button`
  background: #6a5acd;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background: #5a4ebc;
  }
`;

const UserCard: React.FC<UserCardProps> = ({ name, id, phone, branch, addedAt, balance }) => {
  return (
    <CardWrapper>
      <Balance>{balance} UZS</Balance>
      <UserName>{name}</UserName>
      <UserInfo><strong>ID:</strong> {id}</UserInfo>
      <UserInfo><strong>Phone:</strong> {phone}</UserInfo>
      <UserInfo><strong>Branch:</strong> {branch}</UserInfo>
      <UserInfo><strong>Added at:</strong> {addedAt}</UserInfo>
      <ButtonGroup>
        <Button>Add Payment</Button>
        <Button>Add to Group</Button>
      </ButtonGroup>
    </CardWrapper>
  );
};

export default UserCard;
