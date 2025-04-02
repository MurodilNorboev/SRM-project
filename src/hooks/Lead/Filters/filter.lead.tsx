import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { Container } from "./styles";
import {
  CustomOption,
  CustomSelect,
} from "../../../shared/component.styles/selectStyles";
import { CustomButton, CustomResetButton } from "../../../shared/component.styles/buttonStyles";
import { CustomSearchInput } from "../../../shared/component.styles/inputStyles";

const FilterBar: React.FC = () => {
  return (
    <Container>
      <CustomSearchInput height="44px" placeholder="Search student..." />
      <CustomSelect background="white" height="44px" color="#BFBAE3">
        <CustomOption>Search lead section</CustomOption>
      </CustomSelect>
      <CustomSelect background="white" height="44px" color="#BFBAE3">
        <CustomOption>From where</CustomOption>
      </CustomSelect>
      <CustomResetButton>
        <FiRefreshCw /> Reset filter
      </CustomResetButton>
      <CustomButton height="44px" width="162px">
        + Add lead
      </CustomButton>
    </Container>
  );
};

export default FilterBar;
