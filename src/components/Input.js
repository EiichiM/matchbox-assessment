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
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium color-grey dark:text-white"
          >
           {label}
        </label>
        <input
          type={type}
          id={name}
          value={value}
          onChange={onChange}
          className="input-opacity border border-gray-400 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder={placeholder}
          required={required}
          />
          {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Input;
