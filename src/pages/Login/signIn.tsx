import img from "../../assets/loginImg.png";
import {
  LeftContent,
  LoginContainer,
  RightContent,
} from "../styles/login.style";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import Icon from "../../assets/languageIcon.svg";
import {
  CustomInput,
  CustomLabel,
  HelperText,
} from "../../shared/component.styles/inputStyles";
import { useState } from "react";
import axios from "axios";
import { CustomButton } from "../../shared/component.styles/buttonStyles";
import Logo from "../../assets/Logo.jpg";

const initialFormData = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const { t, i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = { email: "", password: "" };
    if (!formData.email) {
      formErrors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t("invalidEmail");
    }
    if (!formData.password) {
      formErrors.password = t("passwordRequired");
    }
    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return; // Prevent submission if there are validation errors
    try {
      const response = await axios.post("/api/demo-request", {
        ...formData,
      });
      console.log("Yuborildi:", response.data);
      if (response.data.success) {
        navigate("/lead"); // Navigate to a different page after login success
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
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

        <h1>{t("Login")}</h1>
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <CustomLabel htmlFor={key}>{t(key)}</CustomLabel>
            <CustomInput
              id={key}
              name={key}
              type={
                /phone/.test(key) ? "tel" : /email/.test(key) ? "email" : "text"
              }
              placeholder={`${t(key)}`}
              value={value}
              onChange={handleChange}
              error={!!errors[key as keyof typeof errors]} // Set error based on validation state
            />
            <HelperText helperText={errors[key as keyof typeof errors]}>
              {errors[key as keyof typeof errors]}
            </HelperText>
          </div>
        ))}

        <CustomButton onClick={handleSubmit}>{t("next")}</CustomButton>

        <div className="line"></div>

        <div className="bottom">
          <div className="text1">
            <h2>{t("loginText1")}</h2>
            <h3>{t("loginText1")}</h3>
          </div>
          <div
            className="text2"
            onClick={() => navigate("/forgotpassword")} // Navigate to forgot password page
          >
            {t("forgotPassword")}
          </div>
        </div>
      </LeftContent>
      <RightContent>
        <img src={img} alt="" />
      </RightContent>
    </LoginContainer>
  );
};

export default SignInPage;
