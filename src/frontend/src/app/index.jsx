import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing/page";
import { ArticleListPage } from "./articles/page";
import { GoalsPage } from "./goals/page";
import { CreateArticlePage } from './articles/create/page';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/articles",
    element: <ArticleListPage />
  },
  {
    path: "/articles/create",
    element: <CreateArticlePage />
  },
  {
    path: "/goals",
    element: <GoalsPage />
  }
])
