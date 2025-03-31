import img from "../../../assets/loginImg.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  LeftContent,
  LoginContainer,
  RightContent,
} from "../../../pages/styles/login.style";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../shared/component.styles/buttonStyles";
import { CustomLabel } from "../../../shared/component.styles/inputStyles";
import {
  InputAdornment,
  TextField,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import Icon from "../../../assets/languageIcon.svg";
import Logo from "../../../assets/Logo.jpg";

const ChangePasswordPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [error, setError] = useState(false); // Error state to track password mismatch

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password === repeatPassword) {
      setError(false);
      // Handle password change logic here
      navigate("/signIn"); // Navigate back to login after password change
    } else {
      setError(true); // Show error if passwords don't match
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prev) => !prev);
  };

  const handleLangChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <LoginContainer>
      <LeftContent>
        <div className="top">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="logo"
            className="logo"
          />
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
        </div>
        <h1>{t("changePsw")}</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <CustomLabel>{t("New_password")}</CustomLabel>
          <TextField
            sx={{ background: "#EFEEF8" }}
            type={showPassword ? "text" : "password"}
            label={t("New_password")}
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            fullWidth
            error={error} // Apply error state if passwords don't match
            helperText={error ? t("passwordMismatch") : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <CustomLabel>{t("Repeat_password")}</CustomLabel>
          <TextField
            sx={{ background: "#EFEEF8" }}
            type={showRepeatPassword ? "text" : "password"}
            label={t("Repeat_password")}
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            variant="outlined"
            fullWidth
            error={error} // Apply error state if passwords don't match
            helperText={error ? t("passwordMismatch") : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleRepeatPasswordVisibility}>
                    {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <CustomButton onClick={handleSubmit}>{t("next")}</CustomButton>
      </LeftContent>
      <RightContent>
        <img src={img} alt="" />
      </RightContent>
    </LoginContainer>
  );
};

export default ChangePasswordPage;
