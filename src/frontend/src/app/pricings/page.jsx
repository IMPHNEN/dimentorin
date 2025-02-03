import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Footer } from "../landing/_components/footer";
import { Icon } from "@iconify/react";

export const PricingsPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full min-h-screen p-8" style={{
        backgroundImage: "url(/assets/images/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
      }}>
        <div className="flex justify-between text-white p-12">
          <h1 className="text-4xl w-1/2 font-semibold">
            <span className="w-1/2">Simple pricing based on your need</span>
          </h1>
          <p className="text-sm w-1/2 text-gray-400">
            <span className="w-1/2">
              Subscribe for unlimited consultations and faster token rewards. Enjoy personalized guidance with secure and transparent blockchain transactions.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 bg-black overflow-hidden rounded-3xl text-slate-100">
            <div className="flex flex-col gap-8 mb-12 overflow-hidden p-8" style={{
              backgroundImage: "url(/assets/images/bronze.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "4s0%",
            }}>
              <h2 className="text-2xl capitalize">journey bronze</h2>
              <h3 className="font-bold text-5xl flex items-center gap-4">
                $12
                <span className="text-lg font-light text-gray-400">u got 100 tokens</span>
              </h3>
              <p className="text-sm capitalize font-light">
                Perfect for beginners taking their first steps toward self-discovery and personal growth.
              </p>
              <button className="text-sm w-fit rounded-lg border border-slate-100 py-2 px-8">
                buy
              </button>
            </div>
            <ul className="flex flex-col gap-2 p-8">
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Daily consultation for guidance
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Limited AI-generated responses tailored to your need
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Basic token rewards to motivate progress
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Access to the leaderboard and achievements system
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Viewable progress tracker for the 100-day challenge
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 bg-black overflow-hidden rounded-3xl text-slate-100">
            <div className="flex flex-col gap-8 mb-12 overflow-hidden p-8" style={{
              backgroundImage: "url(/assets/images/silver.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "4s0%",
            }}>
              <h2 className="text-2xl capitalize">journey bronze</h2>
              <h3 className="font-bold text-5xl flex items-center gap-4">
                $12
                <span className="text-lg font-light text-gray-400">u got 100 tokens</span>
              </h3>
              <p className="text-sm capitalize font-light">
                Perfect for beginners taking their first steps toward self-discovery and personal growth.
              </p>
              <button className="text-sm w-fit rounded-lg border border-slate-100 py-2 px-8">
                buy
              </button>
            </div>
            <ul className="flex flex-col gap-2 p-8">
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                daily consultations to stay on track
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Advanced AI insights for deeper guidance
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Increased token rewards to recognize your dedication
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Access to exclusive mid-tier challenges and theme
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Priority visibility on the leaderboard
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 bg-black overflow-hidden rounded-3xl text-slate-100">
            <div className="flex flex-col gap-8 mb-12 overflow-hidden p-8" style={{
              backgroundImage: "url(/assets/images/gold.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "4s0%",
            }}>
              <h2 className="text-2xl capitalize">journey bronze</h2>
              <h3 className="font-bold text-5xl flex items-center gap-4">
                $12
                <span className="text-lg font-light text-gray-400">u got 100 tokens</span>
              </h3>
              <p className="text-sm capitalize font-light">
                Perfect for beginners taking their first steps toward self-discovery and personal growth.
              </p>
              <button className="text-sm w-fit rounded-lg border border-slate-100 py-2 px-8">
                buy
              </button>
            </div>
            <ul className="flex flex-col gap-2 p-8">
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                daily consultations to stay on track
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Advanced AI insights for deeper guidance
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Increased token rewards to recognize your dedication
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Access to exclusive mid-tier challenges and theme
              </li> <li className="flex items-center gap-2 text-sm">
                <Icon icon="material-symbols:check-rounded" />
                Priority visibility on the leaderboard
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
