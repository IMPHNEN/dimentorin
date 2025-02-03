import React from "react";
import { Icon } from "@iconify/react";

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
          <div className="flex items-center gap-x-5">
            <div>
              <span className="block">About your account</span>
              <span className="block text-[#D3D2D2]">
                Information about account settings, profile management, and
                preferences
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
            <div>
              <span className="block">Privacy policy</span>
              <span className="block text-[#D3D2D2]">
                Details on how user data is collected, used, and protected
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
            <div>
              <span className="block">Open source libraries</span>
              <span className="block text-[#D3D2D2]">
                A list of open-source libraries and their licenses used in the
                app
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
            <div>
              <span className="block">App updates</span>
              <span className="block text-[#D3D2D2]">
                Information about new features, improvements, and bug fixes in
                the latest app
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
