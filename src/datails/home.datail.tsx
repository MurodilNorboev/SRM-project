import { useState } from "react";
import {
  DemoPageContainer,
  LeftFormCon,
  RightCon,
} from "./styles/demo.home.styles";
import {
  CustomButton,
  CustomWhiteButton,
} from "../shared/component.styles/buttonStyles";
import {
  CustomInput,
  CustomLabel,
} from "../shared/component.styles/inputStyles";
import {
  CustomOption,
  CustomSelect,
} from "../shared/component.styles/selectStyles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import { useTranslation } from "react-i18next";
import { countries, initialFormData } from "../shared/mock/home.datail.mock";

export default function DemoRequestPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Boshlang‘ich davlat
  const [phoneNumber, setPhoneNumber] = useState(""); // Telefon raqami

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const fullPhoneNumber = `${selectedCountry.code} ${phoneNumber}`;
      const response = await axios.post("/api/demo-request", {
        ...formData,
        phone_number: fullPhoneNumber,
      });
      console.log("Yuborildi:", response.data);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = countries.find((c) => c.code === e.target.value);
    if (newCountry) {
      setSelectedCountry(newCountry);
      setPhoneNumber(""); // Davlat o‘zgarganda inputni tozalash
    }
  };

  // Telefon raqamni formatlash (yozish jarayonida)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawPhone = e.target.value.replace(/\D/g, ""); // Harflar va belgilardan tozalash
    let formattedPhone = "";
    let format = selectedCountry.format;
    let index = 0;

    for (let i = 0; i < format.length; i++) {
      if (rawPhone.length > index) {
        formattedPhone +=
          (i === 0 ? "" : "-") + rawPhone.slice(index, index + format[i]);
        index += format[i];
      }
    }

    setPhoneNumber(formattedPhone);
  };

  return (
    <DemoPageContainer>
      <LeftFormCon>
        <h4>{t("demoFormText1")}</h4>
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <CustomLabel htmlFor={key}>{t(key)}</CustomLabel>
            {key === "phone_number" ? (
              <div style={{ display: "flex", width: "483px", gap: "0" }}>
                {/* Davlat kodini tanlash */}
                <CustomSelect
                  value={selectedCountry.code}
                  onChange={handleSelectChange}
                  width="20%"
                  height="58px"
                  style={{
                    borderTopRightRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  {countries.map((country) => (
                    <CustomOption key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </CustomOption>
                  ))}
                </CustomSelect>

                {/* Telefon raqami */}
                <CustomInput
                  type="tel"
                  width="80%"
                  height="58px"
                  placeholder={t("phone_number")}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  style={{
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    borderLeft: "none",
                  }}
                />
              </div>
            ) : (
              <CustomInput
                id={key}
                name={key}
                type={
                  /phone/.test(key)
                    ? "tel"
                    : /email/.test(key)
                    ? "email"
                    : "text"
                }
                width="483px"
                height="58px"
                placeholder={`${t(key)}`}
                value={value}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <CustomButton width="100%" height="44px" onClick={handleSubmit}>
          {t("send")}
        </CustomButton>

        <div className="line"></div>

        <div className="bottomCon">
          <h5>{t("registered")}</h5>

          <CustomWhiteButton
            width="136px"
            height="44px"
            onClick={() => navigate("/signIn")}
          >
            {t("Login")}
          </CustomWhiteButton>
        </div>
      </LeftFormCon>
      <RightCon>
        <div className="text1">{t("rightText")}</div>
        <div className="text2">{t("text2")}</div>
        <div className="line"></div>
        <div className="text3">{t("text3")}</div>
        <div className="contact">
          <img src={phone} alt="phoneImg" className="phoneimg" />
          <div className="phoneNumber">(82) 10-5714-7887</div>
        </div>
        <div className="contact">
          <img src={email} alt="emailImg" className="phoneimg" />
          <div className="phoneNumber">norboevmurodil@gmail.com</div>
        </div>
        <CustomButton width="226px" height="44px">
          {t("mainBtn")}
        </CustomButton>
      </RightCon>
    </DemoPageContainer>
  );
}
