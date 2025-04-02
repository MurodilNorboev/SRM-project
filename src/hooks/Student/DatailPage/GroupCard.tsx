import { GroupCard } from "../../../shared";

const StudentGroupCard = () => {
  return (
    <GroupCard
      groupName="Ocean"
      course="IT - Bootcamp"
      teacher="Shoxsanam"
      trainingDates="03.24.2024 - 07.29.2024"
      students={12}
      rooms={2}
      time="09:00 - 11:00"
      price="223.000"
    />
  );
};

export default StudentGroupCard;
