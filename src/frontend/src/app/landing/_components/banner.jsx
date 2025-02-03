import React from "react";

export const Banner = () => {
  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center bg-black px-6 text-white"
      style={{
        backgroundImage: "url(/images/banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "calc(100dvh - 86px)",
      }}
    >
      <h1 className="font-baim text-6xl font-bold lg:text-[10.625rem]">
        dimentorin
      </h1>
      <p className="mt-8 max-w-3xl text-center font-sans text-xl text-[#cfcfcf] lg:text-2xl">
        A blockchain-powered AI platform that helps you discover your life
        purpose through a 100-day challenge, daily reflections, and personalized
        achievements.
      </p>
      <div className="mt-12 flex space-x-4 font-sans">
        <a
          href="/signup"
          className="font-baim rounded-lg bg-[#1E4272] px-12 py-4 font-semibold text-white duration-150 hover:bg-[#275591] active:scale-95 lg:text-xl"
        >
          Join with us
        </a>
        {/* <a
            href="#create-article"
            className="font-baim rounded-lg bg-[#1E4272] px-12 py-4 font-semibold text-white duration-150 hover:bg-[#275591] active:scale-95 lg:text-xl"
          >
            Create article
          </a>
          <a
            href="#consultation"
            className="font-baim rounded-lg bg-[#1E4272] px-12 py-4 font-semibold text-white duration-150 hover:bg-[#275591] active:scale-95 lg:text-xl"
          >
            Consultation
          </a> */}
      </div>
    </section>
  );
};
