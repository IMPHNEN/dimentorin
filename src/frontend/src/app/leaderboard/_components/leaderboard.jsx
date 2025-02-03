import { Icon } from '@iconify/react';
import React from 'react';

function Leaderboard() {
    return (
        <div className="flex flex-col gap-4 w-[80%] py-8">
            <table className="rounded-xl overflow-hidden">
                <thead className="bg-blue-800 text-slate-100 capitalize">
                    <tr>
                        <th className="py-2">status</th>
                        <th>rank</th>
                        <th>name</th>
                        <th>consistency streak</th>
                        <th>total article</th>
                        <th>total like</th>
                    </tr>
                </thead>
                <tbody className="capitalize text-slate-100 text-center">
                    <tr>
                        <td>-</td>
                        <td>1</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className="font-semibold text-lime-600">+2^</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className="font-semibold text-rose-600">-2</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>1</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr> <tr>
                        <td>-</td>
                        <td>1</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr> <tr>
                        <td>-</td>
                        <td>1</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr> <tr>
                        <td>-</td>
                        <td>1</td>
                        <td className="py-4 flex items-center justify-center gap-2">
                            <div className="w-5 h-5 bg-purple"></div>
                            mas ambatukam
                        </td>
                        <td className="text-white/10">12 days</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex text-gray-300 text-xs justify-center items-center gap-2">
                <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                    <a href="#">
                        <Icon icon="ant-design:left-outlined" />
                    </a>
                </div>
                <div className="w-6 h-6 flex justify-center items-center border border-gray-300 bg-blue-800">
                    <a href="#">1</a>
                </div>
                <div className="w-6 h-6 flex justify-center items-center border bg-gray-400/60 border-gray-300">
                    <a href="#">2</a>

                </div>
                <div className="w-6 h-6 flex justify-center items-center border bg-gray-400/60 border-gray-300">
                    <a href="#">3</a>
                </div>
                <div className="w-6 h-6 flex justify-center items-center border border-gray-300">
                    <a href="#">
                        <Icon icon="ant-design:right-outlined" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;