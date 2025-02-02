import React, { Fragment } from "react";
import { Navbar } from "../landing/_components/navbar";
import { Banner } from "./_components/banner";
import { Footer } from "../landing/_components/footer";
import Articles from "./_components/articles";

export const ArticleListPage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-black flex flex-col items-center font-sans w-full">
        <Banner />

        <div className="max-w-[90%] p-4 mx-auto flex justify-around gap-8">
          <Articles />
          <div className="flex flex-col gap-4 w-[40%]">
            <h2 className="text-xl capitalize">
              leaderboard
            </h2>
            <table className="rounded-xl overflow-hidden">
              <thead className="bg-blue-800 text-slate-100 capitalize">
                <tr>
                  <th className="py-2">rank</th>
                  <th>name</th>
                  <th>total like</th>
                </tr>
              </thead>
              <tbody className="gap-2 capitalize text-slate-100 text-center">
                <tr>
                  <td>1</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr>
                <tr className="bg-white/10">
                  <td>2</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr> <tr>
                  <td>5</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr> <tr>
                  <td>6</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr> <tr>
                  <td>7</td>
                  <td className="py-4 flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-purple-800"></div>
                    mas ambatukam
                  </td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>

            <div className="flex text-gray-300 text-xs justify-center items-center gap-2">
              <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                <a href="#"></a>
              </div>
              <div className="w-6 h-6 flex justify-center items-center border border-gray-300 bg-blue-800">
                <a href="#">1</a>
              </div>
              <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                <a href="#">2</a>

              </div>
              <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                <a href="#">3</a>
              </div>
              <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
