import { useColorScheme } from "@mui/joy/styles"
import { GlobalContainer } from "../shared/styles/bgStyles"
import { StudentInput, StudentTable } from "../hooks";

const StudentPage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8"}}>
      <StudentInput />
      <StudentTable />
    </GlobalContainer>
  )
}

export default StudentPage