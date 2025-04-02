import { useState } from "react";
import {
  BtnWrapper,
  HMENU,
  MIDDLE,
  VMENU,
} from "../../shared/component.styles/buttonStyles";
import BudgetIncome from "./budget.income";
import BudgetCateogry from "./budget.category";
import BudgetExpense from "./budget.expense";

const BudgetMain = () => {
  const [view, setView] = useState<"inc" | "ctg" | "exp">("inc");
  return (
    <div style={{gap: "40px", display: "flex", flexDirection: "column"}}>
      <BtnWrapper>
        <HMENU
          style={{ color: view !== "inc" ? "#2C2669" : "white" }}
          width="187px"
          height="44px"
          onClick={() => setView("inc")}
          $active={view === "inc"}
        >
          inc
        </HMENU>
        <MIDDLE
          style={{ color: view !== "ctg" ? "#2C2669" : "white" }}
          width="187px"
          height="44px"
          onClick={() => setView("ctg")}
          $active={view === "ctg"}
        >
          ctg
        </MIDDLE>
        <VMENU
          style={{ color: view !== "exp" ? "#2C2669" : "white" }}
          width="187px"
          height="44px"
          onClick={() => setView("exp")}
          $active={view === "exp"}
        >
          exp
        </VMENU>
      </BtnWrapper>

      {view === "inc" && <BudgetIncome />}
      {view === "ctg" && <BudgetCateogry />}
      {view === "exp" && <BudgetExpense />}
    </div>
  );
};

export default BudgetMain;
