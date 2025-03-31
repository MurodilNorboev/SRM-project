import { FiRefreshCw } from "react-icons/fi";
import {
  CustomOption,
  CustomSelect,
} from "../../shared/component.styles/selectStyles";
import { CustomButton } from "../../shared/component.styles/buttonStyles";
import { ResetButton, Container } from "../Lead/Filters/styles";

const SelectInputs = () => {
  return (
    <Container style={{ padding: "0px 40px 0px 0px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
        <CustomSelect
          background="white"
          width="170px"
          height="44px"
          color="#BFBAE3"
        >
          <CustomOption>Search lead section</CustomOption>
        </CustomSelect>
        <CustomSelect
          background="white"
          width="170px"
          height="44px"
          color="#BFBAE3"
        >
          <CustomOption>Search lead section</CustomOption>
        </CustomSelect>
        <CustomSelect
          background="white"
          width="170px"
          height="44px"
          color="#BFBAE3"
        >
          <CustomOption>From where</CustomOption>
        </CustomSelect>
        <ResetButton style={{ width: "170px" }}>
          <FiRefreshCw /> Reset filter
        </ResetButton>
      </div>
      <CustomButton height="44px" width="170px">
        + Add lead
      </CustomButton>
    </Container>
  );
};

export default SelectInputs;
