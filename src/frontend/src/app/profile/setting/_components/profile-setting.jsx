import React from "react";
import { Icon } from "@iconify/react";

export const ProfileSetting = () => {
  return (
    <main className="col-span-6 flex flex-col items-center justify-center bg-[#212121] text-white">
      <div className="mb-24 flex max-w-2xl flex-col">
        <div className="mb-6 self-start">
          <span className="font-baim text-start text-2xl font-semibold">
            Account Setting
          </span>
        </div>
        <div className="rounded-lg bg-[#292929] p-6">
          <div className="flex items-center gap-x-5">
            <Icon icon="mdi:shield-outline" width={24} height={24} />
            <div>
              <span className="block">Password and security</span>
              <span className="block text-[#D3D2D2]">
                Settings to secure the account through passwords and other
                security features
              </span>
            </div>
            <Icon
              icon="mdi:chevron-right"
              width={24}
              height={24}
              className="ml-auto hover:cursor-pointer"
            />
          </div>
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <div className="flex items-center gap-x-5">
            <Icon icon="mdi:people-outline" width={24} height={24} />
            <div>
              <span className="block">Personal detail</span>
              <span className="block text-[#D3D2D2]">
                Personal user information such as name, address, or date of
                birth
              </span>
            </div>
            <Icon
              icon="mdi:chevron-right"
              width={24}
              height={24}
              className="ml-auto hover:cursor-pointer"
            />
          </div>
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <div className="flex items-center gap-x-5">
            <Icon icon="mdi:journal-outline" width={24} height={24} />
            <div>
              <span className="block">Your information and permission</span>
              <span className="block text-[#D3D2D2]">
                Data shared by the user and access permissions for apps or
                services
              </span>
            </div>
            <Icon
              icon="mdi:chevron-right"
              width={24}
              height={24}
              className="ml-auto hover:cursor-pointer"
            />
          </div>
          <div className="my-4 px-4">
            <hr className="text-[#403E3E]" />
          </div>
          <div className="flex items-center gap-x-5">
            <Icon icon="mdi:login" width={24} height={24} />
            <div>
              <span className="block">Log in</span>
              <span className="block text-[#D3D2D2]">
                Option to log in using a registered account
              </span>
            </div>
            <Icon
              icon="mdi:chevron-right"
              width={24}
              height={24}
              className="ml-auto hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
