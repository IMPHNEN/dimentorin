import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";
import Articles from "./_components/articles";
import Leaderboard from "./_components/leaderboard";

export const ArticleListPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />

        <div className="max-w-[90%] py-12 mx-auto flex justify-around gap-8">
          <Articles />
          <Leaderboard />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
