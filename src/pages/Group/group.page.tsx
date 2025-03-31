import { useColorScheme } from "@mui/joy/styles";
import { TableComponent } from "../../components/Table/table";
import { leads } from "../Lead/mock";
import { GlobalContainer } from "../../styles/bgStyles";
import SelectInputs from "./Filters/select";
import { columns } from "../../mock/ColumnsMock";


const GroupPage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <SelectInputs />
      <TableComponent
        id="lead"
        data={leads}
        columns={columns}
        selectable={false}
        showMenu={true}
        actions={["edit", "delete"]}
        // showIndex={false}
      />
    </GlobalContainer>
  );
};

export default GroupPage;
