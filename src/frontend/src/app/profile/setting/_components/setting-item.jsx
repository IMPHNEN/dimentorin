import React from "react";
import { Icon } from "@iconify/react";

export const SettingItem = ({ icon, label, description }) => {
  return (
    <div>
      <div className="flex items-center gap-x-5">
        <Icon icon={icon} width={24} height={24} />
        <div>
          <span className="block">{label}</span>
          <span className="block text-[#D3D2D2]">{description}</span>
        </div>
        <Icon
          icon="mdi:chevron-right"
          width={24}
          height={24}
          className="ml-auto hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
