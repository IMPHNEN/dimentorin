import React from "react";

export const About = () => {
  return (
    <section id="about" className="max-w-8xl mt-32 mb-12 w-full px-6">
      <div className="flex flex-col gap-4 align-middle lg:flex-row">
        <section className="me-4 flex flex-grow flex-col justify-between py-3">
          <div>
            <div className="font-baim text-3xl font-semibold text-white">
              Greg Han
            </div>
            <div className="text-secondary mt-3 text-lg">
              this is a description please don&lsquo;t delete
            </div>
          </div>
          <div>
            <div aria-hidden="true" className="h-2 rounded-full bg-[#d9d9d9]">
              <div className="bg-purple h-2 w-[75%] rounded-full"></div>
            </div>
          </div>
        </section>

        <section className="flex space-x-4">
          <div className="bg-purple flex h-36 w-36 flex-col justify-center rounded-3xl text-center text-white">
            <div>Day progress</div>
            <div className="font-baim text-4xl font-bold lg:text-5xl">80</div>
          </div>
          <div className="align-center flex w-80 justify-center gap-3 rounded-3xl bg-[#292929] px-2">
            <img
              src="/images/medal.png"
              alt=""
              className="self-center"
              width="69"
              height="74"
            />
            <div className="self-center">
              <div className="font-baim text-2xl font-bold text-white">
                1st Place
              </div>
              <div className="text-sm text-[#f8f8f8]">
                Consistency move future
              </div>
              <a className="mt-3 inline-block text-sm text-[#d3d2d2] underline hover:cursor-pointer">
                see all leaderboard
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
