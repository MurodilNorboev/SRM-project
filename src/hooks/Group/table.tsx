import { TableComponent } from "../../shared";
import { columns, leads } from "../../shared/mock/ColumnsMock";

const TableDatail = () => {
  return (
    <TableComponent
      id="lead"
      style={{ marginTop: "40px" }}
      data={leads}
      columns={columns}
      selectable={false}
      showMenu={true}
      actions={["edit", "delete"]}
      navigation={true}
      nav={"groupDatail"}
    />
  );
};

export default TableDatail;
