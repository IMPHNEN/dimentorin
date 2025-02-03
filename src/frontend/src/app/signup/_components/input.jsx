import React from "react";

export const Input = ({ type, label, ...props }) => {
  return (
    <div className="my-4">
      <label className="block lg:text-lg">{label}</label>
      <input
        type={type}
        {...props}
        className="block w-full rounded-lg p-4 outline outline-[#505050] focus:ring-2"
      />
    </div>
  );
};
