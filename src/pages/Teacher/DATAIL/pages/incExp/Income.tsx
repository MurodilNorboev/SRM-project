import { TableComponent } from "../../../../../components/Table/table";
import { columns, leads } from "../../../mock";

const IncomeTable = () => {
  return (
    <TableComponent
      style={{ marginTop: "40px"}}
      data={leads}
      columns={columns}
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
