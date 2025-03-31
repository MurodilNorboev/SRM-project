import { TableComponent } from "../../../../components/Table/table";

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
      data={leads}
      columns={columns}
      selectable={false}
      showMenu={true}
      actions={["edit", "delete"]}
      // showIndex={false}
    />
  );
};
