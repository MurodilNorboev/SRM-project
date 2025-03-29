import { useColorScheme } from "@mui/joy/styles";
const NavbarSidebarComponent = () => {
  const { mode } = useColorScheme();
  return (
    <div
      style={{
        background: "#FFF",
        height: "80px",
        width: "100%",
        backgroundColor: mode === "dark" ? "#0B0D0E" : "#ffffff",
      }}
    ></div>
  );
};

export default NavbarSidebarComponent;
