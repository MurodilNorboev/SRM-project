import { TableComponent } from "../../../shared/Table/table";
import { columnsTeacher, leads } from "../../../shared/mock/ColumnsMock";

const IncomeTable = () => {
  return (
    <TableComponent
      style={{ marginTop: "40px" }}
      data={leads}
      columns={columnsTeacher}
      selectable={false}
      showMenu={true}
      actions={["edit", "delete", "add", "sms"]} // Add a "view" action
      showIndex={true}
      navigation={true}
      nav={"teacherDatail"}
      id={leads[0].id}
    />
  );
};

export default IncomeTable;
