import { TableComponent } from "../../../../../components/Table/table";
import { columnsTeacher, leads } from "../../../../../mock/ColumnsMock";

const ExpenseTable = () => {
  return (
    <TableComponent
    style={{ marginTop: "40px"}}
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
  )
}

export default ExpenseTable