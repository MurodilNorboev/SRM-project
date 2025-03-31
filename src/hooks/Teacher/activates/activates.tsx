import { ButtonProps } from "../types";
import ActiveSalary from "./active.salary";
import React from "react";
import { groups } from "../../../shared/mock/ColumnsMock";
import { GroupCardCont } from "../incExp/styles";
import { GroupCard } from "../exp";

export const AktivPages = ({
  right,
  mainView,
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
    <div style={{ color: "black" }}>
      {mainView === "left" && (
        <ActiveSalary salaryView={salaryView} setSalaryView={setSalaryView} />
      )}
      {mainView === "middle" && (
        <GroupCardCont>
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </GroupCardCont>
      )}
      {mainView === "right" && (
        <ActiveSalary
          right={right}
          salaryView={salaryView}
          setSalaryView={setSalaryView}
        />
      )}
    </div>
  );
};
