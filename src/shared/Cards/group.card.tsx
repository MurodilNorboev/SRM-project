import React from "react";
import styled from "styled-components";

interface GroupCardProps {
  groupName: string;
  course: string;
  teacher: string;
  trainingDates: string;
  students: number;
  rooms: number;
  time: string;
  price: string;
}

const CardWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GroupImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #d0eaff;
`;

const GroupName = styled.h3`
  font-size: 18px;
  color: #333;
`;

const Info = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const Badge = styled.span`
  background: #eaf2ff;
  padding: 3px 8px;
  font-size: 12px;
  border-radius: 6px;
  color: #333;
  margin-right: 5px;
`;

const Time = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

const PriceTag = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #6a5acd;
  text-align: right;
`;

const GroupCard: React.FC<GroupCardProps> = ({
  groupName,
  course,
  teacher,
  trainingDates,
  students,
  rooms,
  time,
  price,
}) => {
  return (
    <CardWrapper>
      <GroupHeader>
        <GroupImage />
        <GroupName>{groupName}</GroupName>
      </GroupHeader>
      <Info><strong>Course:</strong> {course}</Info>
      <Info><strong>Teacher:</strong> {teacher}</Info>
      <Info><strong>Training Dates:</strong> {trainingDates}</Info>
      <Info>
        <Badge>{students} students</Badge>
        <Badge>{rooms}-room</Badge>
      </Info>
      <Time>{time}</Time>
      <PriceTag>{price} UZS</PriceTag>
    </CardWrapper>
  );
};

export default GroupCard;
