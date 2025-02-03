import React from "react";
import { Input } from "./input";

export const Form = () => {
  return (
    <section className="text-white">
      <h1 className="font-baim mb-4 text-3xl font-bold lg:text-5xl">Sign Up</h1>
      <p className="mb-8 lg:text-xl">
        Register now to start a 100 day journey of discovering your life
        purpose!
      </p>
      <Input
        type="text"
        placeholder="yourname"
        label="Name"
        required
        autofocus
      />
      <Input
        type="email"
        placeholder="yourname@email.com"
        label="Email"
        required
      />
      <Input type="password" placeholder="********" label="Password" required />
      <a
        href="/"
        className="mt-6 mb-2 flex w-full justify-center gap-2 rounded-lg bg-[#1E4272] p-3 align-middle hover:cursor-pointer hover:bg-[#275591] active:scale-95 lg:text-xl"
      >
        Sign Up
      </a>
      <button className="my-4 flex w-full justify-center gap-2 rounded-lg bg-white p-3 align-middle text-[#454545] hover:cursor-pointer hover:bg-gray-200 active:scale-95 lg:text-xl">
        <img src="/images/google.png" alt="" />
        <span className="self-center">Continue with Google</span>
      </button>
    </section>
  );
};
