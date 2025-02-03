import React from "react";

export const ProfileEdit = () => {
  return (
    <main className="col-span-4 flex flex-col items-center justify-center bg-[#212121] text-white">
      <div className="mb-8 flex w-full max-w-4xl items-center gap-x-8">
        <div className="flex h-[144px] w-[144px] items-center justify-center rounded-full bg-[#D9D9D9]">
          <img src="/icons/ic-profile.svg" alt="" />
        </div>
        <div className="flex flex-1 flex-col pr-16">
          <div className="font-baim text-3xl font-semibold">Greg Han</div>
          <div className="text-lg text-[#cccccc]">
            Hari ini adalah kesempatan membangun hari esok yang diinginkan
          </div>
          <div className="mt-6 flex items-center gap-x-4">
            <div
              aria-hidden="true"
              className="h-2 flex-1 rounded-full bg-[#d9d9d9]"
            >
              <div className="bg-purple h-2 w-[75%] rounded-full"></div>
            </div>
            <span>80%</span>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-4xl gap-6">
        <div className="flex flex-1 flex-col gap-y-4 rounded-2xl bg-[#292929] p-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="font-baim text-2xl font-medium">Article</span>
            <a href="/articles" className="text-[#B4B4B4] hover:underline">
              see all
            </a>
          </div>
          <div className="flex items-center rounded-lg bg-[#181818] px-8 py-4">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Find Your Path</div>
              <span className="text-sm">
                Discover purpose through daily steps
              </span>
            </div>
            <div className="ml-auto flex h-[65px] w-[65px] flex-col items-center justify-center rounded-full bg-[#6E01F1]">
              <div className="text-xs">Day</div>
              <div className="text-xl">80</div>
            </div>
          </div>

          <div className="flex items-center rounded-lg bg-[#181818] px-8 py-4">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Find Your Path</div>
              <span className="text-sm">
                Discover purpose through daily steps
              </span>
            </div>
            <div className="ml-auto flex h-[65px] w-[65px] flex-col items-center justify-center rounded-full bg-[#6E01F1]">
              <div className="text-xs">Day</div>
              <div className="text-xl">79</div>
            </div>
          </div>

          <div className="flex items-center rounded-lg bg-[#181818] px-8 py-4">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Find Your Path</div>
              <span className="text-sm">
                Discover purpose through daily steps
              </span>
            </div>
            <div className="ml-auto flex h-[65px] w-[65px] flex-col items-center justify-center rounded-full bg-[#6E01F1]">
              <div className="text-xs">Day</div>
              <div className="text-xl">78</div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="flex gap-6 rounded-2xl bg-[#292929] px-10 py-6">
            <img
              src="/images/medal.png"
              alt=""
              className="self-center"
              width="69"
              height="74"
            />
            <div className="self-center">
              <div className="font-baim text-2xl font-bold text-white">
                1st Place
              </div>
              <div className="text-sm text-[#f8f8f8]">
                Consistency move future
              </div>
              <a
                href="/leaderboard"
                className="mt-3 inline-block text-sm text-[#d3d2d2] underline"
              >
                see all leaderboard
              </a>
            </div>
          </div>
          <div className="flex gap-6 rounded-2xl bg-[#292929] px-10 py-6">
            <img
              src="/images/stonk.png"
              alt=""
              className="self-center"
              width="69"
              height="74"
            />
            <div className="self-center">
              <div className="text-sm text-[#f8f8f8]">Goals</div>
              <div className="font-baim text-lg font-bold text-white">
                Make 100 article each day
              </div>
              <div className="mt-3 inline-block text-xs text-[#BBB2B2]">
                every goals done got free token
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-1 flex-col items-center gap-y-2 rounded-2xl bg-[#292929] p-4">
              <div>Sisa Token</div>
              <div className="flex w-full justify-center rounded-xl bg-[#181818] px-6 py-4">
                <span className="font-baim text-3xl font-semibold">12</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-y-2 rounded-2xl bg-[#292929] p-4">
              <div>Total Token</div>
              <div className="flex w-full justify-center rounded-xl bg-[#181818] px-6 py-4">
                <span className="font-baim text-3xl font-semibold">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
