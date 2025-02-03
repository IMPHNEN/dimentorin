import React from "react";
import Leaderboard from "../../articles/_components/leaderboard";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex min-h-[86px] w-full justify-center bg-black">
      <nav className="max-w-8xl flex w-full items-center justify-between bg-black px-6 py-4 text-white">
        <div className="font-baim text-xl font-semibold select-none">
          dimentorin
        </div>
        <ul className="hidden space-x-8 lg:flex">
          <li>
            <a href="#home" className="font-bold hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/articles" className="hover:underline">
              Article
            </a>
          </li>
          <li>
            <a href="/leaderboard" className="hover:underline">
              Leaderboard
            </a>
          </li>
          <li>
            <a href="/consultation" className="hover:underline">
              Consultation
            </a>
          </li>
          <li>
            <a href="/pricings" className="hover:underline">
              Buy Token
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:underline">
              About us
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* <button aria-label="Search" className="hover:text-gray-400">
              <Image src="/icons/ic-search.svg" alt="" width={20} height={20} />
            </button> */}
          <button aria-label="Edit" className="hover:text-gray-400">
            <img src="/icons/ic-edit.svg" alt="" width="20" height="20" />
          </button>
        </div>
      </nav>
    </header>
  );
};
