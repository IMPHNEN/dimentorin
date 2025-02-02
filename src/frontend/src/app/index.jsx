import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing/page";
import { ArticleListPage } from "./articles/page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/articles",
    element: <ArticleListPage />
  }
])
