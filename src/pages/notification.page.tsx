import { useColorScheme } from "@mui/joy/styles";
import { GlobalContainer } from "../shared/styles/bgStyles";
import { NotificationDatail } from "../hooks";

const NotificationPage = () => {
  const { mode } = useColorScheme();
  return (
    <GlobalContainer
      style={{
        paddingRight: "40px",
        backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8",
      }}
    >
      <NotificationDatail />
    </GlobalContainer>
  );
};

export default NotificationPage;
