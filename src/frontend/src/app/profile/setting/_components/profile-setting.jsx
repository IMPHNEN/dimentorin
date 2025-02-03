import React from "react";
import { SettingItem } from "./setting-item";

export const ProfileSetting = () => {
  return (
    <main className="col-span-4 flex flex-col items-center justify-center bg-[#212121] text-white">
      <div className="mb-24 flex max-w-2xl flex-col">
        <div className="mb-6 self-start">
          <span className="font-baim text-start text-2xl font-semibold">
            Account Setting
          </span>
        </div>
        <div className="rounded-lg bg-[#292929] p-6">
          <SettingItem
            icon="mdi:shield-outline"
            label="Password and security"
            description="Settings to secure the account through passwords and other security features"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <SettingItem
            icon="mdi:people-outline"
            label="Personal detail"
            description="Personal user information such as name, address, or date of birth"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <SettingItem
            icon="mdi:journal-outline"
            label="Your information and permission"
            description="Data shared by the user and access permissions for apps or services"
          />
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <SettingItem
            icon="mdi:login"
            label="Log in"
            description="Option to log in using a registered account"
          />
        </div>
      </div>
    </main>
  );
};
