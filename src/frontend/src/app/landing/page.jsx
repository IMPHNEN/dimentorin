import React, { Fragment } from "react";
import { Navbar } from "./_components/navbar";
import { Banner } from "./_components/banner";
import { About } from "./_components/about";
import { JoinOurCommunity } from "./_components/join";
import { Consultation } from "./_components/consultation";
import { Article } from "./_components/article";
import { ArticleCardList } from "./_components/article-card-list";
import { Footer } from "./_components/footer";

export const LandingPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />
        <About />
        <Consultation />
        <Article />
        <ArticleCardList />
        <JoinOurCommunity />
      </main>
      <Footer />
    </Fragment>
  );
};
