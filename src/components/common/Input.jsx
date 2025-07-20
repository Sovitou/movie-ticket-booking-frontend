// Reusable Input component
import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      className="form-input"
    />
  );
};

export default Input;
