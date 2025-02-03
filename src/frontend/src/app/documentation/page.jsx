import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";

export const DocumentationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <div className="max-w-[90%] py-12 mx-auto flex justify-around gap-8">
          <video src="ICP_Project_Documentation.mp4" controls></video>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
