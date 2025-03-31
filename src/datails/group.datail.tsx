import { useColorScheme } from "@mui/joy/styles";
import { GlobalContainer } from "../shared/styles/bgStyles";
import { useState } from "react";
import { FloatActionButton } from "../shared";
import { Attandance } from "../hooks";

const GroupDatail = () => {
  const { mode } = useColorScheme();
  const [mainView, setMainView] = useState<"left" | "middle" | "right">("left");
  const [salaryView, setSalaryView] = useState<"inc" | "exp">("inc");
  return (
    <GlobalContainer
      style={{
        backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8",
        overflow: "scroll",
      }}
    >
      <Attandance />
      <FloatActionButton
        left="Left"
        middle="Middle"
        right="Right"
        mainView={mainView}
        setMainView={setMainView}
        salaryView={salaryView}
        setSalaryView={setSalaryView}
        intexp={false}
      />
    </GlobalContainer>
  );
};

export default GroupDatail;
