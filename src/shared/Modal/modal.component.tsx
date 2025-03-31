import { useEffect } from "react";
import { CustomButton } from "../component.styles/buttonStyles";
import { ModalContainer, ModalContent, CloseButton } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Modal ochilganda sahifa scroll bo‘lmasin
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null; // Modal yopiq bo‘lsa, hech narsa qaytarmaydi

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <h2>{title}</h2>
        {children}
        <CustomButton onClick={onClose}>Yopish</CustomButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
