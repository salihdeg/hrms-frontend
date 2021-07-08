import React from "react";
import Select from "react-select";

export default function SdSelect({ onChange, options, value, className, labelName }) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div className="mb-2" style={{paddingBottom:"1rem"}}>
      <label htmlFor={labelName}>{labelName}</label>
      <div className={className}>
        <Select
          value={defaultValue(options, value)}
          onChange={(value) => onChange(value)}
          options={options}
        />
      </div>
    </div>
  );
}
