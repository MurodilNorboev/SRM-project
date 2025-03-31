import { useColorScheme } from "@mui/joy/styles";
import { GlobalContainer } from "../shared/styles/bgStyles";
import { Filter, TableTeacher } from "../hooks";

const TeacherPage = () => {
  const { mode }: any = useColorScheme();

  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <Filter />
     <TableTeacher />
    </GlobalContainer>
  );
};

export default TeacherPage;
