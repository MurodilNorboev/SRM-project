import { useState } from "react";
import {
  CustomBinafshaButton,
  CustomButton,
} from "../shared/component.styles/buttonStyles";
import {
  LeftItem,
  ProfileContainer,
  ProfileContent,
  Text1,
  Text2,
  Text3,
  TextWrapper,
} from "./styles/profile.style";
import Avatar from "@mui/joy/Avatar";
import { useTranslation } from "react-i18next";
import { GlobalContainer } from "../shared/styles/bgStyles";
import { useColorScheme } from "@mui/joy/styles";
import Modal from "../hooks/Profile/modal";
const ProfilePage = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useColorScheme();

  return (
    <GlobalContainer
      style={{ backgroundColor: mode === "dark" ? "#0B0D0E" : "#EFEEF8" }}
    >
      <ProfileContainer>
        <ProfileContent>
          <LeftItem>
            <Avatar
              className="Avatar"
              variant="outlined"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
              sx={{ height: "100%", width: "100%", marginBottom: "-20px" }}
            />
          </LeftItem>
          <CustomButton
            width="150px"
            height="44px"
            padding="0px"
            border="none"
            onClick={() => setIsOpen(true)}
          >
            {t("Edit_profile")}
          </CustomButton>
        </ProfileContent>
        <Text1>Andrew Smith</Text1>
        <CustomBinafshaButton>{t("ceo")}</CustomBinafshaButton>
        <div
          style={{
            padding: "8px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <TextWrapper>
            <Text2>{t("Telegram")}:</Text2>
            <Text3>@andrewsmith</Text3>
          </TextWrapper>
          <TextWrapper>
            <Text2>{t("Phone")}:</Text2>
            <Text3>99 772-45-58</Text3>
          </TextWrapper>
        </div>

        {isOpen && <Modal closeModal={() => setIsOpen(false)} />}
      </ProfileContainer>
    </GlobalContainer>
  );
};

export default ProfilePage;
