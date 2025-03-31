import { useState } from "react";
import { CardView } from "./Lead_menus/V_MENU/v_menu.lead";
import { TableView } from "./Lead_menus/H_MENU/h_menu.lead";
import { useColorScheme } from "@mui/joy/styles";
import { VMenuIcon } from "./Lead_menus/V_MENU/VMenuIcon";
import HMenuIcon from "./Lead_menus/H_MENU/HMenuIcon";
import { leads } from "./mock";
import FilterBar from "./Lead_menus/Filters/filter.lead";
import { GlobalContainer } from "../../styles/bgStyles";
import { BtnWrapper, HMENU, VMENU } from "../../components/StyledComponents/buttonStyles";

const LeadList = () => {
  const { mode } = useColorScheme();
  const [view, setView] = useState<"table" | "card">("table");

  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <BtnWrapper>
        <HMENU onClick={() => setView("table")} $active={view === "table"}>
          <HMenuIcon color={view === "table" ? "white" : "#2C2669"} />
        </HMENU>
        <VMENU onClick={() => setView("card")} $active={view === "card"}>
          <VMenuIcon color={view === "card" ? "white" : "#2C2669"} />
        </VMENU>

        <FilterBar />
      </BtnWrapper>
      
      {view === "table" ? (
        <TableView leads={leads} />
      ) : (
        <CardView leads={leads} />
      )}
    </GlobalContainer>
  );
};

export default LeadList;
