import { useNavigate } from "react-router-dom";
import "../index.css";
import { MainContainer } from "./styles/home.style";
import { CustomWhiteButton } from "../shared/component.styles/buttonStyles";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <MainContainer>
      <div className="mainImgs">
        <div className="content">
          <h3>{t("mainDesc")}</h3>
          <CustomWhiteButton
            width="196px"
            height="52px"
            className="btn"
            onClick={() => navigate("/demo")}
          >
            {t("mainBtn")}
          </CustomWhiteButton>
        </div>
        <div className="bottom">
          <div className="line"></div>
          <div className="bottomTxT">
            © 2024 edumansim.uz  {t("mainBottom")}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default HomePage;
