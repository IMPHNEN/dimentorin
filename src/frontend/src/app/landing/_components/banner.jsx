import React from "react";

export const Banner = () => {
  return (
      <section
        className="flex flex-col items-center justify-center h-full bg-black text-white w-full px-6"
        style={{
          backgroundImage: "url(/assets/images/banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "calc(100dvh - 86px)",
        }}
      >
        <h1 className="text-6xl lg:text-[10.625rem] font-bold font-baim">
          dimentorin
        </h1>
        <p className="mt-8 text-center text-xl lg:text-2xl max-w-3xl font-sans text-[#cfcfcf]">
          A blockchain-powered AI platform that helps you discover your life
          purpose through a 100-day challenge, daily reflections, and
          personalized achievements.
        </p>
        <div className="mt-12 flex space-x-4 font-sans">
          <a
            href="#signup"
            className="px-12 py-4 bg-[#1E4272] rounded-lg font-baim font-semibold text-white lg:text-xl hover:bg-[#275591] active:scale-95 duration-150"
          >
            Join with us
          </a>
          {/* <a
            href="#create-article"
            className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
          >
            Create article
          </a>
          <a
            href="#consultation"
            className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
          >
            Consultation
          </a> */}
        </div>
      </section>
  );
};
