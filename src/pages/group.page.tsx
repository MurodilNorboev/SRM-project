import { useColorScheme } from "@mui/joy/styles";
import { GlobalContainer } from "../shared/styles/bgStyles";
import SelectInputs from "../hooks/Group/select";
import Table from "../hooks/Group/table";

const GroupPage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <SelectInputs />
      <Table />
    </GlobalContainer>
  );
};

export default GroupPage;
