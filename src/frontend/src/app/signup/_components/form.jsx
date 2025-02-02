import React from "react";
import { Input } from "./input";

export const Form = () => {
  return (
    <section className="text-white">
      <h1>Sign Up</h1>
      <p>
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
      <button className="block w-full p-3 bg-blue-500 hover:cursor-pointer">
        Sign Up
      </button>
      <button className="block w-full p-3 text-black bg-white hover:cursor-pointer">
        <span>logo</span>
        <span>Continue with Google</span>
      </button>
    </section>
  );
};
