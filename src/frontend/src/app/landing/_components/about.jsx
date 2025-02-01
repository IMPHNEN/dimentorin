import React from "react";

export const About = () => {
  return (
      <section id="about" className="w-full max-w-8xl px-6 mt-32 mb-12">
        <div className="flex flex-col lg:flex-row gap-4 align-middle">
          <section className="flex-grow flex flex-col justify-between py-3 me-4">
            <div>
              <div className="font-semibold font-baim text-white text-3xl">
                Greg Han
              </div>
              <div className="text-secondary text-lg mt-3">
                this is a description please don&lsquo;t delete
              </div>
            </div>
            <div>
              <div aria-hidden="true" className="h-2 bg-[#d9d9d9] rounded-full">
                <div className="w-[75%] bg-purple h-2 rounded-full"></div>
              </div>
            </div>
          </section>

          <section className="flex space-x-4">
            <div className="flex flex-col justify-center text-center rounded-3xl bg-purple text-white w-36 h-36">
              <div>Day progress</div>
              <div className="text-4xl lg:text-5xl font-baim font-bold">80</div>
            </div>
            <div className="flex rounded-3xl bg-[#292929] w-80 justify-center align-center gap-3 px-2">
              <img
                src="/images/medal.png"
                alt=""
                className="self-center"
                width="69"
                height="74"
              />
              <div className="self-center">
                <div className="font-bold font-baim text-white text-2xl">
                  1st Place
                </div>
                <div className="text-[#f8f8f8] text-sm">
                  Consistency move future
                </div>
                <a className="inline-block text-[#d3d2d2] text-sm underline mt-3 hover:cursor-pointer">
                  see all leaderboard
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
  );
};
