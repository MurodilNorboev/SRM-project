import { useColorScheme } from "@mui/joy/styles"
import { GlobalContainer } from "../shared/styles/bgStyles"
import { BudgetMain } from "../hooks";

const BudgetPage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8"}}>
      <BudgetMain />
    </GlobalContainer>
  )
}

export default BudgetPage