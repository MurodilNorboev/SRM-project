import { CustomButton } from "../../../components/StyledComponents/buttonStyles";
import { CustomSearchInput } from "../../../components/StyledComponents/inputStyles";
import { FilterBar } from "./styles";

const Filter = () => {
  return (
    <FilterBar>
      <CustomSearchInput placeholder="Search..." height="44px" width="313px" />
      <CustomButton width="184px" height="44px">
        + Add lead
      </CustomButton>
    </FilterBar>
  );
};

export default Filter;
