import { TableComponent } from "../shared/Table/table";
import { columnsTeacher, leads } from "../shared/mock/ColumnsMock";
import { useColorScheme } from "@mui/joy/styles";
import Filter from "../hooks/Teacher/filter";
import { GlobalContainer } from "../shared/styles/bgStyles";

const TeacherPage = () => {
  const { mode }: any = useColorScheme();

  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <Filter />
      <TableComponent
        data={leads}
        columns={columnsTeacher}
        selectable={false}
        showMenu={true}
        actions={["edit", "delete", "add", "sms"]} // Add a "view" action
        showIndex={true}
        navigation={true}
        nav={"teacherDatail"}
        id={leads[0].id}
      />
    </GlobalContainer>
  );
};

export default TeacherPage;
