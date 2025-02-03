import React from "react";
import { Icon } from "@iconify/react";

export const SidebarLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="align-bottom text-lg underline-offset-3 hover:underline"
    >
      <Icon icon={icon} width="1.2em" height="1.2em" className="mr-3 inline" />
      <span className="lg:text-xl">{label}</span>
    </a>
  );
};
