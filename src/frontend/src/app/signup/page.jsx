import React, { Fragment } from "react";
import { Form } from "./_components/form";

export const SignUpPage = () => {
  return (
    <Fragment>
      <div className="w-full h-[100dvh] absolute bg-[url(/assets/images/signup-bg.jpg)] bg-no-repeat bg-left-top">
        <span className="relative text-4xl font-bold text-white font-baim top-8 left-8">
          dimentorin
        </span>
      </div>
      <div className="flex justify-center w-full bg-black">
        <div className="flex max-w-8xl min-h-[100dvh]">
          <section className="w-[600px] pt-8"></section>
          <main className="flex flex-col items-center flex-1 w-full pt-8 font-sans">
            <Form />
          </main>
        </div>
      </div>
    </Fragment>
  );
};
