import React from "react";

export const Input = ({ type, label, ...props }) => {
  return (
    <div>
      <label className="block">{label}</label>
      <input
        type={type}
        {...props}
        className="block w-full p-2 outline outline-[#505050]"
      />
    </div>
  );
};
