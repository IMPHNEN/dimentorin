import React from "react";
import { Icon } from "@iconify/react";

export const Article = () => {
  return (
    <>
      <section id="article" className="w-full max-w-8xl px-6 mt-24 text-white">
        <div className="text-white items-start lg:items-center flex flex-col lg:flex-row gap-x-32 gap-y-6 mb-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold font-baim">
              Article
            </h2>
            <a
              href="#"
              className="underline underline-offset-2 font-thin inline-block mt-3"
            >
              <div className="flex flex-row items-center gap-2">
                <p>See all news</p>
                <Icon icon="mdi:arrow-bottom-right" />
              </div>
            </a>
          </div>
          <div className="text-lg lg:text-xl leading-loose">
            <p>
              This article is designed to help maximize your potential within
              100 days. Through daily consultations. You&lsquo;ll receive
              guidance tailored to your journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
