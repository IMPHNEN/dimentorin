import React from "react";

export const Footer = () => {
  return (
    <footer className="relative z-10 flex w-full flex-col bg-black font-sans text-xs text-white">
      <hr />
      <div className="max-w-8xl flex w-full flex-col justify-between gap-y-4 self-center px-5 py-6 lg:flex-row">
        <div>
          <p className="text-xs font-thin text-[#d8d8d8]">
            CONNECT WITH LIKE-MINDED INDIVIDUALS EXCHANCE IDEAS, AND ENHANCE
            YOUR SKILLS IN A SUPPORTIVE
          </p>
        </div>
        <div className="flex gap-x-8">
          <p className="text-xs font-thin text-[#d8d8d8]">
            &copy;2025 ALL RIGHTS RESERVED
          </p>
          <p className="text-xs font-thin text-[#d8d8d8]">PRIVACY</p>
          <p className="text-xs font-thin text-[#d8d8d8]">TERM OF USE</p>
        </div>
      </div>
    </footer>
  );
};
