import React from "react";

export const JoinOurCommunity = () => {
  return (
    <section id="join-our-community" className="max-w-8xl w-full px-5">
      <div className="flex min-h-[50rem] flex-col items-center justify-center">
        <h2 className="font-baim mb-10 text-4xl font-bold text-white lg:text-8xl">
          JOIN OUR COMUNITY
        </h2>
        <p className="font-baim text-1xl mb-10 max-w-[70rem] text-center leading-loose font-medium text-white lg:text-2xl lg:leading-loose">
          JOIN THE DIMENTORIN COMMUNITY WITH OVER 121.000 MEMBERS TO LEARN
          PROGRAMMING, SHARE KNOWLEDGE, AND GROW TOGETHER CONNECT WITH
          LIKE-MINDED INDIVIDUALS, EXCHANGE IDEAS, AND ENHANCE YOUR SKILLS IN A
          SUPPORTIVE
        </p>
        <a
          href="/signup"
          className="font-baim rounded-lg bg-[#1E4272] px-12 py-4 font-semibold text-white duration-150 hover:bg-[#275591] active:scale-95 lg:text-xl"
        >
          Join Community
        </a>
      </div>
    </section>
  );
};
