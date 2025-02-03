import React, { Fragment } from "react";
import { Navbar } from "../../landing/_components/navbar";
import { Footer } from "../../landing/_components/footer";
import { ProfileHelp } from "./_components/profile-help";
import { Sidebar } from "../_components/sidebar";

export const ProfileHelpPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-5">
        <Sidebar />
        <ProfileHelp />
      </div>
      <Footer />
    </Fragment>
  );
};
