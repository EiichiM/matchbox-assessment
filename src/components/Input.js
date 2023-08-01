"use client";
import React from "react";

function Input({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="color-grey">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Input;
