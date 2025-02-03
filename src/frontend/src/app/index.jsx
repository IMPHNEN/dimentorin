import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing/page";
import { ArticleListPage } from "./articles/page";
import { GoalsPage } from "./goals/page";
import { CreateArticlePage } from "./articles/create/page";
import { SignUpPage } from "./signup/page";
import { ProfileEditPage } from "./profile/edit/page";
import { ProfileSettingPage } from "./profile/setting/page";
import { ProfileHelpPage } from "./profile/help/page";
import { LeaderboardPage } from "./leaderboard/page";
import { PricingsPage } from "./pricings/page";
import { ConsultationPage } from "./consultation/page";
import { DocumentationPage } from "./documentation/page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/profile/edit",
    element: <ProfileEditPage />,
  },
  {
    path: "/profile/setting",
    element: <ProfileSettingPage />,
  },
  {
    path: "/profile/help",
    element: <ProfileHelpPage />,
  },
  {
    path: "/articles",
    element: <ArticleListPage />,
  },
  {
    path: "/articles/create",
    element: <CreateArticlePage />,
  },
  {
    path: "/goals",
    element: <GoalsPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPage />
  },
  {
    path: "/pricings",
    element: <PricingsPage />
  },
  {
    path: "/consultation",
    element: <ConsultationPage />
  },
  {
    path: "/documentation",
    element: <DocumentationPage />
  }
])

