import {
  Avatars,
  Button,
  Card,
  Divider,
  Header,
  Info,
  Tag,
  Title,
} from "./incExp/styles";

export const GroupCard = ({ group }: any) => {
  return (
    <Card>
      <Header>
        <Avatars image={group?.image}>{!group?.image && group.name[0]}</Avatars>
        <div>
          <Title>{group.name}</Title>
          <Info>{group.course}</Info>
          <Info>{group.startDate}</Info>
          <div style={{ display: "flex", gap: "5px" }}>
            <Tag>{group.students} students</Tag>
            <Tag>{group.room}</Tag>
          </div>
        </div>
      </Header>
      <Divider />
      <Info>
        <b>{group.time}</b>
      </Info>
      <Info>{group.days}</Info>
      <Button>See group</Button>
    </Card>
  );
};
