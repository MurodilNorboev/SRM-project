import { LeftContent, LoginContainer, RightContent } from "../SignIn/style";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../components/StyledComponents/buttonStyles";
import {
  CustomInput,
  CustomLabel,
} from "../../../components/StyledComponents/inputStyles";
import img from "../../../assets/loginImg.png";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import Icon from "../../../assets/languageIcon.svg";
import Logo from "../../../assets/Logo.jpg";

const ForgotPasswordPage = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleLangChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/changepassword");
  };

  return (
    <LoginContainer>
      <LeftContent>
        <div className="top">
          <img onClick={() => navigate('/')} src={Logo} alt="logo" className="logo" />
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
        <h1>{t("forgotPassword")}</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <CustomLabel>{t("email")}</CustomLabel>
          <CustomInput
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <CustomButton onClick={handleSubmit}>{t("next")}</CustomButton>

        <div className="line"></div>

        <div className="bottom2" onClick={() => navigate('/signIn')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
              fill="#2C2669"
            />
            <path
              d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
              fill="black"
              fill-opacity="0.2"
            />
          </svg>
          <h2>Back</h2>
        </div>
      </LeftContent>
      <RightContent>
        <img src={img} alt="" />
      </RightContent>
    </LoginContainer>
  );
};

export default ForgotPasswordPage;
