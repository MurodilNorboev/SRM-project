import * as React from "react";
import { GlobalContainer } from "../../../styles/bgStyles";
import { useColorScheme } from "@mui/joy/styles";
import TopButtons from "./pages/topbuttons";

const ParentComponent = () => {
  const { mode } = useColorScheme();
  const [mainView, setMainView] = React.useState<"left" | "middle" | "right">(
    "left"
  );
  const [salaryView, setSalaryView] = React.useState<"inc" | "exp">("inc");

  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <TopButtons
        left="Left Section"
        middle="Middle Section"
        right="Right Section"
        mainView={mainView}
        setMainView={setMainView}
        salaryView={salaryView}
        setSalaryView={setSalaryView}
      />
    </GlobalContainer>
  );
};

export default ParentComponent;
