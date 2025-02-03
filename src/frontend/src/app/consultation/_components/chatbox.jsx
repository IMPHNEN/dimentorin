import React from "react";

export const ChatBox = () => {
  return (
    <div className="absolute top-[300px] lg:left-[750px]">
      <div className="mb-4 text-xl text-white">Livy ur path</div>
      <div className="relative z-20 w-[650px] rounded-lg bg-[#eeeeee] p-6 text-xl leading-loose">
        Hello, welcome to the consultation! Here, you will get personal guidance
        from AI to help you find and achieve your life goals. Enjoy a 100-day
        journey with daily challenges, reflection and support designed
        specifically for your development. Let's start your journey{" "}
      </div>

      <div className="relative bottom-[73px] -left-[50px] z-10">
        <svg
          width="93"
          height="79"
          viewBox="0 0 93 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.98975 78.6817C1.52196 78.8299 -0.0558351 76.0971 1.30642 74.0341L48.6815 2.28686C49.9103 0.42586 52.668 0.5086 53.7831 2.43992L92.2304 69.0327C93.3455 70.964 92.0383 73.3936 89.8122 73.5273L3.98975 78.6817Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>

      <div className="relative">
        <button className="absolute top-[-70px] right-0 mt-6 mb-2 flex justify-center gap-2 rounded-lg bg-[#1E4272] px-6 py-3 align-middle text-white hover:cursor-pointer hover:bg-[#275591] active:scale-95">
          Balas
        </button>
      </div>
    </div>
  );
};
