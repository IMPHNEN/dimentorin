import React from "react";
import { Card } from "./Card";

export const ArticleCardList = () => {
  return (
    <>
      <section
        id="article-list"
        className="w-full max-w-8xl px-6 mb-10 overflow-x-auto"
      >
        <div className="flex flex-nowrap gap-6 pb-6">
          <Card
            date="Kamis, 2 Januari 2025"
            title="Unlock purpose in 100 days"
          />
          <Card
            date="Kamis, 2 Januari 2025"
            title="Achieve growth daily reflection"
          />
          <Card
            date="Kamis, 2 Januari 2025"
            title="Transform your journey with AI"
          />
          <Card
            date="Kamis, 2 Januari 2025"
            title="Transform your journey with AI"
          />
          <Card
            date="Kamis, 2 Januari 2025"
            title="Achieve growth daily reflection"
          />
        </div>
      </section>
    </>
  );
};
