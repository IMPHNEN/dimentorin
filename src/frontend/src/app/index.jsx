import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing/page";
import { SignUpPage } from "./signup/page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
