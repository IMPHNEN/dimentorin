import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="text-white font-sans bg-black text-xs w-full flex flex-col">
        <hr />
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between max-w-8xl w-full px-5 py-6 self-center">
          <div>
            <p className="text-[#d8d8d8] font-thin text-xs">
              CONNECT WITH LIKE-MINDED INDIVIDUALS EXCHANCE IDEAS, AND ENHANCE
              YOUR SKILLS IN A SUPPORTIVE
            </p>
          </div>
          <div className="flex gap-x-8">
            <p className="text-[#d8d8d8] font-thin text-xs">
              @2025 ALL RIGHTS RESERVED
            </p>
            <p className="text-[#d8d8d8] font-thin text-xs">PRIVACY</p>
            <p className="text-[#d8d8d8] font-thin text-xs">TERM OF USE</p>
          </div>
        </div>
      </footer>
    </>
  );
};
