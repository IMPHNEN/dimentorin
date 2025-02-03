import React, { Fragment } from "react";
import { Form } from "./_components/form";

export const SignUpPage = () => {
  return (
    <Fragment>
      <div className="flex min-h-[100dvh] w-full">
        <div className="relative hidden h-[100dvh] w-[600px] max-w-full lg:block">
          <img
            src="/images/char-boy.png"
            className="pointer-events-none absolute bottom-0 left-[80px] z-10"
            alt=""
          />
          <img
            src="/images/char-girl.png"
            className="pointer-events-none absolute bottom-0 left-[250px] z-15"
            alt=""
          />
          <img
            src="/images/signup-bg.jpg"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            alt="Background"
          />
          <span className="font-baim absolute top-8 left-8 text-4xl font-bold text-white">
            dimentorin
          </span>
        </div>
        <div className="flex flex-1 justify-center bg-black">
          <div className="max-w-8xl flex min-h-[100dvh]">
            <main className="flex w-full max-w-lg flex-1 flex-col items-center pt-20 font-sans">
              <Form />
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
