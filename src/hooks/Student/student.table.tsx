import { TableComponent } from "../../shared"
import { columns, leads } from "../../shared/mock/ColumnsMock"

const StudentTable = () => {
  return (
    <TableComponent
      style={{ marginTop: "40px" }}
      data={leads}
      columns={columns}
      selectable={false}
      showMenu={true}
      actions={["edit", "delete"]}
      showIndex={false}
      navigation={true}
      nav={"studentDatail"}
      id={leads[0].id}
    />
  )
}

export default StudentTable