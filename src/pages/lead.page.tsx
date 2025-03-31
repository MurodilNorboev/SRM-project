import { useState } from "react";
import { useColorScheme } from "@mui/joy/styles";
import { leads } from "../shared/mock/lead.mock";
import { GlobalContainer } from "../shared/styles/bgStyles";
import {
  BtnWrapper,
  HMENU,
  VMENU,
} from "../shared/component.styles/buttonStyles";
import {
  CardView,
  FilterBar,
  HMenuIcon,
  TableView,
  VMenuIcon,
} from "../hooks/Lead";

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
