import React from "react";
import Leaderboard from '../../articles/_components/leaderboard';

export const Navbar = () => {
  return (
    <header className="bg-black w-full flex justify-center min-h-[86px] sticky top-0 z-50">
      <nav className="flex items-center max-w-8xl w-full justify-between px-6 py-4 bg-black text-white">
        <div className="text-xl font-semibold font-baim select-none">
          dimentorin
        </div>
        <ul className="hidden lg:flex space-x-8">
          <li>
            <a href="#home" className="hover:underline font-bold">
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
