import React from "react";
import { ErrorMessage, useField } from "formik";

export default function SdTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="errorText" name={field.name} />
    </div>
  );
}
