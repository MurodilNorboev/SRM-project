import { useState } from "react";
import Modal from "../../../../components/Modal/modal.component";
import { CustomButton } from "../../../../components/StyledComponents/buttonStyles";

const ProfilePage = () => {
  const [modalType, setModalType] = useState<string | null>(null);

  return (
    <div>
      <CustomButton onClick={() => setModalType("editProfile")}>
        Profilni tahrirlash
      </CustomButton>
      <CustomButton onClick={() => setModalType("changePassword")}>
        Parolni o‘zgartirish
      </CustomButton>

      {modalType === "editProfile" && (
        <Modal
          isOpen={!!modalType}
          onClose={() => setModalType(null)}
          title="Profilni tahrirlash"
        >
          {/* Edit Profile Modal ichidagi UI */}
          <input type="text" placeholder="Ism va familiya" />
          <input type="email" placeholder="Email" />
        </Modal>
      )}

      {modalType === "changePassword" && (
        <Modal
          isOpen={!!modalType}
          onClose={() => setModalType(null)}
          title="Parolni o‘zgartirish"
        >
          {/* Change Password Modal ichidagi UI */}
          <input type="password" placeholder="Yangi parol" />
          <input type="password" placeholder="Parolni qayta kiriting" />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;
