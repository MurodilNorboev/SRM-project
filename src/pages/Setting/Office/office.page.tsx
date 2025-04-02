import { useColorScheme } from "@mui/joy/styles"
import { GlobalContainer } from "../../../shared/styles/bgStyles"

const OfficePage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8"}}>OfficePage</GlobalContainer>
  )
}

export default OfficePage