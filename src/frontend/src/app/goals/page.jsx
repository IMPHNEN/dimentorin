import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";
import Goals from "./_components/goals";

export const GoalsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />
        <Goals />
      </main>
      <Footer />
    </Fragment>
  );
};
