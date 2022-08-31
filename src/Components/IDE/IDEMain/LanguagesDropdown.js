import React from "react";
import Select from "react-select";
import { customStyles } from "../constansts/customStyles";
import { languageOptions } from "../constansts/languagesOptions";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[4]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
