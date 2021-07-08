import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";

export const SdDatePicker = ({ label, ...props }) => {
  //const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <DatePicker
          {...field}
          {...props}
          autoComplete="off"
          // onChange={(value) => {
          //   setFieldValue("deadlineDate", value);
          // }}
        />
      </div>
    </div>
  );
};
// JSON.parse(JSON.stringify(value))
