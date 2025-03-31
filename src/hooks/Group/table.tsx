import { columns, leads } from "../../shared/mock/ColumnsMock";
import { TableComponent } from "../../shared/Table/table";

const Table = () => {
  return (
    <TableComponent
      id="lead"
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

export default Table;
