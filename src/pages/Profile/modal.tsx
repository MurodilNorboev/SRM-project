import { useState } from "react";
import { CustomButton } from "../../components/StyledComponents/buttonStyles";
import { LeftFormCon, ModalContainer } from "./style";
import { useTranslation } from "react-i18next";
import {
  CustomInput,
  CustomLabel,
} from "../../components/StyledComponents/inputStyles";
import axios from "axios";
import {
  CustomOption,
  CustomSelect,
} from "../../components/StyledComponents/selectStyles";
import { countries, initialFormData } from "./mock";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
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
    <ModalContainer>
      <LeftFormCon style={{ height: "auto" }}>
        {/* Modalni yopish tugmasi */}
        <div
          onClick={closeModal}
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>{t("modal")}</h4> <p style={{ cursor: "pointer" }}>X</p>
        </div>
        {Object.entries(formData).map(([key, value]) => (
          <div
            key={key}
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <CustomLabel htmlFor={key}>{t(key)}</CustomLabel>
            {key === "Phone_number" ? (
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
                  placeholder={t("Phone_number")}
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
          {t("Update_profile")}
        </CustomButton>
      </LeftFormCon>
    </ModalContainer>
  );
};

export default Modal;
