import { NavbarContainer, RightContent } from "./style";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Icon from "../../assets/languageIcon.svg";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../StyledComponents/buttonStyles";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const textToCopy = "(82) 10 5714 7887";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("Text copied!"))
      .catch((err) => alert("Failed to copy text: " + err));
  };

  const handleLangChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <NavbarContainer>
      <h1 onClick={() => navigate("/")}>EduManSim</h1>

      <RightContent>
        <h2 onClick={handleCopy}>(82) 10 5714 7887</h2>

        <Select
          sx={{
            borderRadius: "4px",
            zIndex: 12,
            border: "1px solid var(--600, #2C2669)",
            maxWidth: "88px",
            maxHeight: "40px",
          }}
          value={i18n.language}
          onChange={handleLangChange}
          endAdornment={
            <InputAdornment position="end">
              <img
                src={Icon}
                alt="Language Icon"
                style={{
                  width: 30,
                  height: 30,
                  background: "white",
                  zIndex: 12,
                }}
              />
            </InputAdornment>
          }
        >
          <MenuItem sx={{ border: "none" }} value="kor">
            Kor
          </MenuItem>
          <MenuItem sx={{ border: "none" }} value="en">
            Eng
          </MenuItem>
          <MenuItem sx={{ border: "none" }} value="uz">
            Uzb
          </MenuItem>
        </Select>
        <CustomButton
          width="120px"
          height="42px"
          onClick={() => navigate("/signIn")}
          className="btnLogin"
        >
          {t("Login")}
        </CustomButton>
      </RightContent>
    </NavbarContainer>
  );
};

export default NavbarComponent;
