import { TableComponent } from "../../../shared/Table/table";

const columns = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "from", label: "From" },
  { key: "section", label: "Section" },
];

export const TableView = ({ leads }: any) => {
  return (
    <TableComponent
      id="lead"
      style={{ marginTop: "40px" }}
      data={leads}
      columns={columns}
      selectable={false}
      showMenu={true}
      actions={["edit", "delete"]}
      // showIndex={false}
    />
  );
};
