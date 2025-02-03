import React, { Fragment } from "react";
import { Navbar } from "../../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../../landing/_components/footer";
import { Icon } from "@iconify/react";

export const CreateArticlePage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />

        <div className="max-w-[90%] py-12 mx-auto flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex text-slate-100 items-center gap-2 text-sm lg:text-lg">
              <div className="w-4 h-4 rounded-full bg-gray-300">

              </div>
              <span className="text-sm"> xi jin ping</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                <Icon icon="mi:calendar" />
                12 october 2025
              </span>
              <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                <Icon icon="mdi:heart-outline" />
                12
              </span>
              <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                <Icon icon="ep:chat-round" />
                50
              </span>
              <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                <Icon icon="mage:upload" />
                50
              </span>
            </div>
          </div>

          <h1 className="text-gray-200 text-sm capitalize">day 80</h1>
          <h2 className="text-2xl text-slate-100 capitalize">
            title article
          </h2>
          <div className="w-full h-64 rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src="/images/article-default-thumbnail.png" alt="" />
          </div>

          <p className="text-gray-100 text-sm capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam labore expedita consequatur accusantium sed minus voluptatibus? Eligendi porro quaerat reiciendis quidem debitis eveniet mollitia praesentium laborum, laboriosam cumque nulla totam?
            Cumque dolores, in neque similique qui necessitatibus deleniti natus eligendi fugiat, commodi dolorum fugit distinctio odit recusandae dolor quos, rem perspiciatis cum ullam laboriosam incidunt ut. Illum voluptas blanditiis alias?
            Suscipit magni quisquam, eaque molestiae sed accusamus necessitatibus nulla qui itaque cumque similique natus asperiores laudantium magnam. Eum modi laudantium, aliquid quis facere dolorum voluptatibus rem odit optio, eaque natus!
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
