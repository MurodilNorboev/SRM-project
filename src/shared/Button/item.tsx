import React from "react";
import { ButtonProps } from "../../hooks/Teacher/types";
import { columns, leads } from "../mock/ColumnsMock";
import { TableComponent } from "../Table";

export const AktivPages = ({
  mainView,
  intexp,
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
        <TableComponent
          style={{ position: "relative", marginTop: "40px" }}
          id="lead"
          data={leads}
          columns={columns}
          selectable={false}
          showMenu={true}
          actions={["edit", "delete"]}
          navigation={true}
          nav={"groupDatail"}
        />
      )}
      {mainView === "middle" && (
        <TableComponent
          id="lead"
          style={{ position: "relative", marginTop: "40px" }}
          data={leads}
          columns={columns}
          selectable={false}
          showMenu={true}
          actions={["edit", "delete"]}
          navigation={true}
          nav={"groupDatail"}
        />
      )}
      {mainView === "right" && intexp && <div>bb</div>}
    </div>
  );
};
