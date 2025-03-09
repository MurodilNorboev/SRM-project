import { useColorScheme } from "@mui/joy/styles";
const NavbarSidebarComponent = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <div
      style={{
        background: "#FFF",
        height: "80px",
        width: "100%",
        backgroundColor: mode === "dark" ? "black" : "#ffffff",
      }}
    ></div>
  );
};

export default NavbarSidebarComponent;
