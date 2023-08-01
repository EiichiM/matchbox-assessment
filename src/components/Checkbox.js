"use client";
import React from "react";
import Input from "@/components/Input";

function Checkbox({ label }) {
  return (
    <div className="flex items-center checkbox-wrapper">
      <label>
        <input type="checkbox" name="checkbox" />
        <span className="color-grey">{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
