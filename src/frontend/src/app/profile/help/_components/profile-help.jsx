import React from "react";
import { HelpItem } from "./help-item";

export const ProfileHelp = () => {
  return (
    <main className="col-span-4 flex flex-col items-center justify-center bg-[#212121] text-white">
      <div className="mb-24 flex max-w-2xl flex-col">
        <div className="mb-6 self-start">
          <span className="font-baim text-start text-2xl font-semibold">
            Help
          </span>
        </div>
        <div className="rounded-lg bg-[#292929] p-6">
          <HelpItem
            label="About your account"
            description="Information about account settings, profile management, and preferences"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <HelpItem
            label="Privacy policy"
            description="Details on how user data is collected, used, and protected"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <HelpItem
            label="Open source libraries"
            description="A list of open-source libraries and their licenses used in the app"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <HelpItem
            label="App updates"
            description="Information about new features, improvements, and bug fixes in the latest app"
          />
        </div>
      </div>
    </main>
  );
};
