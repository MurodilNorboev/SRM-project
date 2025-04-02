import { CustomSearchInput } from "../../shared/component.styles/inputStyles";
import {
  CustomOption,
  CustomSelect,
} from "../../shared/component.styles/selectStyles";
import {
  CustomButton,
  CustomResetButton,
} from "../../shared/component.styles/buttonStyles";
import { FiRefreshCw } from "react-icons/fi";
const StudentInput = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        paddingRight: "40px",
      }}
    >
      <CustomSearchInput width="213px" placeholder="Search student..." />
      <CustomSelect background="#fff" color="#6053B9" width="150px" height="44px">
        <CustomOption>Finance status</CustomOption>
      </CustomSelect>
      <CustomSelect background="#fff" color="#6053B9" width="150px" height="44px">
        <CustomOption>Teacher</CustomOption>
      </CustomSelect>
      <CustomSelect background="#fff" color="#6053B9" width="150px" height="44px">
        <CustomOption>Course</CustomOption>
      </CustomSelect>
      <CustomResetButton width="150px">
        <FiRefreshCw /> Reset filter
      </CustomResetButton>
      <CustomButton width="215px" height="44px" color="#fff">
        + Add new student
      </CustomButton>
    </div>
  );
};

export default StudentInput;
