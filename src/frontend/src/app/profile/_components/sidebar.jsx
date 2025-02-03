import React from "react";
import { SidebarLink } from "./sidebar-link";

export const Sidebar = () => {
  return (
    <aside className="col-span-1 bg-[#171717] text-white">
      <div className="flex min-h-[800px] flex-col place-items-start gap-y-6 px-8 py-12">
        <div className="font-baim mb-16 text-2xl font-bold">Dashboard</div>
        <SidebarLink
          href="/articles/create"
          icon="mdi:square-edit-outline"
          label="Write article"
        />
        <SidebarLink
          href="/profile/edit"
          icon="mdi:account-outline"
          label="Profile"
        />
        <SidebarLink
          href="/profile/setting"
          icon="mdi:settings-outline"
          label="Setting"
        />
        <SidebarLink href="#" icon="mdi:credit-card-outline" label="Payment" />
        <SidebarLink
          href="/profile/help"
          icon="mdi:help-circle-outline"
          label="Help"
        />
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
