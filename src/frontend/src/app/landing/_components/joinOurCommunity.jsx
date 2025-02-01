import React from "react";

export const JoinOurCommunity = () => {
  return (
    <>
      <section id="join-our-community" className="w-full max-w-8xl px-5">
        <div className="flex flex-col justify-center items-center min-h-[50rem]">
          <h2 className="font-bold font-baim text-4xl lg:text-8xl text-white mb-10">
            JOIN OUR COMUNITY
          </h2>
          <p className="font-medium font-baim text-1xl lg:text-2xl text-white max-w-[70rem] text-center mb-10 leading-loose lg:leading-loose">
            JOIN THE DIMENTORIN COMMUNITY WITH OVER 121.000 MEMBERS TO LEARN
            PROGRAMMING, SHARE KNOWLEDGE, AND GROW TOGETHER CONNECT WITH
            LIKE-MINDED INDIVIDUALS, EXCHANGE IDEAS, AND ENHANCE YOUR SKILLS IN
            A SUPPORTIVE
          </p>
          <a
            href="#join-our-community"
            className="px-12 py-4 bg-[#1E4272] rounded-lg font-baim font-semibold text-white lg:text-xl hover:bg-[#275591] active:scale-95 duration-150"
          >
            Join Community
          </a>
        </div>
      </section>
    </>
  );
};
