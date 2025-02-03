import React, { Fragment } from "react";
import { Navbar } from "../../landing/_components/navbar";
import { Footer } from "../../landing/_components/footer";
import { ProfileSetting } from "./_components/profile-setting";
import { Sidebar } from "../_components/sidebar";

export const ProfileSettingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-8">
        <Sidebar />
        <ProfileSetting />
      </div>
      <Footer />
    </Fragment>
  );
};
