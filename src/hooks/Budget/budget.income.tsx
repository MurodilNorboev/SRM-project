import { TableComponent } from "../../shared"
import { columns, leads } from "../../shared/mock/ColumnsMock"

const BudgetIncome = () => {
  return (
   <TableComponent 
     style={{ marginTop: "40px" }}
     data={leads}
     columns={columns}
     selectable={false}
     showMenu={true}
     actions={["edit", "delete", "add", "sms"]}
     showIndex={true}
     navigation={false}
     id={leads[0].id}
   />
  )
}

export default BudgetIncome