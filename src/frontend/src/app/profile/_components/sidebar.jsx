import React from "react";
import { Icon } from "@iconify/react";

export const Sidebar = () => {
  return (
    <aside className="col-span-1 bg-[#171717] text-white">
      <div className="flex min-h-[800px] flex-col place-items-start gap-y-6 px-8 py-12">
        <div className="font-baim mb-16 text-2xl font-bold">Dashboard</div>
        <a
          href="/articles/create"
          className="align-bottom text-lg underline-offset-3 hover:underline"
        >
          <Icon
            icon="mdi:square-edit-outline"
            width="1.2em"
            height="1.2em"
            className="mr-3 inline"
          />
          <span className="lg:text-xl">Write article</span>
        </a>
        <a
          href="/profile"
          className="align-bottom text-lg underline-offset-3 hover:underline"
        >
          <Icon
            icon="mdi:account-outline"
            width="1.2em"
            height="1.2em"
            className="mr-3 inline"
          />
          <span className="lg:text-xl">Profile</span>
        </a>
        <a
          href="#"
          className="align-bottom text-lg underline-offset-3 hover:underline"
        >
          <Icon
            icon="mdi:settings-outline"
            width="1.2em"
            height="1.2em"
            className="mr-3 inline"
          />
          <span className="font-bold lg:text-xl">Setting</span>
        </a>
        <a
          href="#"
          className="align-bottom text-lg underline-offset-3 hover:underline"
        >
          <Icon
            icon="mdi:credit-card-outline"
            width="1.2em"
            height="1.2em"
            className="mr-3 inline"
          />
          <span className="lg:text-xl">Payment</span>
        </a>
        <a
          href="#"
          className="align-bottom text-lg underline-offset-3 hover:underline"
        >
          <Icon
            icon="mdi:help-circle-outline"
            width="1.2em"
            height="1.2em"
            className="mr-3 inline"
          />
          <span>Help</span>
        </a>
        <div className="mt-auto">
          <a
            href="/buy-token"
            className="rounded-lg bg-[#1E4272] px-12 py-4 font-semibold text-white duration-150 hover:bg-[#275591] active:scale-95 lg:text-xl"
          >
            Buy Token
          </a>
        </div>
      </div>
    </aside>
  );
};
