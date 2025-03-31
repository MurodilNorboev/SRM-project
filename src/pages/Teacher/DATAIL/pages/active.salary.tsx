import {
  BtnWrapper,
  HMENU,
  VMENU,
} from "../../../../components/StyledComponents/buttonStyles";
import { ButtonProps } from "../types";
import IncomeTable from "./incExp/Income";
import ExpenseTable from "./incExp/Expense";

const ActiveSalary = ({
  salaryView,
  setSalaryView,
}: ButtonProps & {
  salaryView: "inc" | "exp";
  setSalaryView: React.Dispatch<React.SetStateAction<"inc" | "exp">>;
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "40px 0px" }}
    >
      <BtnWrapper>
        <HMENU
          border="2px solid #2C2669"
          fontSize="14px"
          width="187px"
          onClick={() => setSalaryView("inc")}
          $active={salaryView === "inc"}
        >
          <div style={{ color: salaryView === "inc" ? "white" : "#2C2669" }}>
            Income
          </div>
        </HMENU>

        <VMENU
          border="2px solid #2C2669"
          fontSize="14px"
          width="187px"
          onClick={() => setSalaryView("exp")}
          $active={salaryView === "exp"}
        >
          <div style={{ color: salaryView === "exp" ? "white" : "#2C2669" }}>
            Expense
          </div>
        </VMENU>
      </BtnWrapper>

      {salaryView === "inc" && <IncomeTable />}
      {salaryView === "exp" && <ExpenseTable />}
    </div>
  );
};

export default ActiveSalary;
