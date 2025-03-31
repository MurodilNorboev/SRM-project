import {
  BtnWrapper,
  HMENU,
  MIDDLE,
  VMENU,
} from "../../../../components/StyledComponents/buttonStyles";
import { AktivPages } from "./pageActivites/activates";
import { ButtonProps } from "../types";

const TopButtons = ({
  left,
  middle,
  right,
  mainView,
  setMainView,
  salaryView,
  setSalaryView,
}: ButtonProps & {
  mainView: "left" | "middle" | "right";
  setMainView: React.Dispatch<
    React.SetStateAction<"left" | "middle" | "right">
  >;
  salaryView: "inc" | "exp";
  setSalaryView: React.Dispatch<React.SetStateAction<"inc" | "exp">>;
}) => {
  return (
    <div>
      <BtnWrapper>
        <HMENU
          border="2px solid #2C2669"
          fontSize="14px"
          width="187px"
          onClick={() => setMainView("left")}
          $active={mainView === "left"}
        >
          <div style={{ color: mainView === "left" ? "white" : "#2C2669" }}>
            Profile
          </div>
        </HMENU>

        <MIDDLE
          border="2px solid #2C2669"
          fontSize="14px"
          width="187px"
          onClick={() => setMainView("middle")}
          $active={mainView === "middle"}
        >
          <div style={{ color: mainView === "middle" ? "white" : "#2C2669" }}>
            Groups
          </div>
        </MIDDLE>

        <VMENU
          border="2px solid #2C2669"
          fontSize="14px"
          width="187px"
          onClick={() => setMainView("right")}
          $active={mainView === "right"}
        >
          <div style={{ color: mainView === "right" ? "white" : "#2C2669" }}>
            Salary
          </div>
        </VMENU>
      </BtnWrapper>

      <AktivPages
        left={left}
        middle={middle}
        right={right}
        mainView={mainView}
        setMainView={setMainView}
        salaryView={salaryView}
        setSalaryView={setSalaryView}
      />
    </div>
  );
};

export default TopButtons;
