import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";
import Leaderboard from "./_components/leaderboard";

export const LeaderboardPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />
        <Leaderboard />
      </main>
      <Footer />
    </Fragment>
  );
};
