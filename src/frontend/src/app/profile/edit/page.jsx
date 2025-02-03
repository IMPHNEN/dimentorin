import React, { Fragment } from "react";
import { Navbar } from "../../landing/_components/navbar";
import { Footer } from "../../landing/_components/footer";
import { ProfileEdit } from "./_components/profile-edit";
import { Sidebar } from "../_components/sidebar";

export const ProfileEditPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="grid grid-cols-5">
        <Sidebar />
        <ProfileEdit />
      </div>
      <Footer />
    </Fragment>
  );
};
