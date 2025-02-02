import { Icon } from "@iconify/react";
import React from "react";

function ArticleList() {
    return (
        <div className="flex justify-between gap-2 p-4 border-b-[.1px] last:border-0 border-gray-600">
            <div className="flex flex-col gap-4 justify-around w-2/3">
                <div className="flex text-slate-100 items-center gap-2 text-sm lg:text-lg">
                    <div className="w-4 h-4 rounded-full bg-gray-300">

                    </div>
                    <span className="text-sm"> xi jin ping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-sm lg:text-lg">
                    <h2 className="text-2xl font-bold text-slate-100 max-h-8 overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum recusandae amet aut quam id obcaecati velit ex tempore, nam sit qui. Explicabo nobis fugiat sapiente iusto iure, voluptatem voluptas.
                    </h2>
                    <p className="text-gray-400 w-full h-6 overflow-hidden text-ellipsis">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim libero a atque porro. Quod distinctio quos facere cum molestiae, reprehenderit pariatur quibusdam esse accusamus fugit, iste, reiciendis explicabo voluptatum?
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                        <Icon icon="mi:calendar" />
                        12 october 2025
                    </span>
                    <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                        <Icon icon="mdi:heart-outline" />
                        12
                    </span>
                    <span className="text-sm text-gray-200 capitalize flex items-center gap-2">
                        <Icon icon="ep:chat-round" />
                        50
                    </span>
                </div>
            </div>

            <div className="w-1/3 h-36 rounded-2xl overflow-hidden relative">
                <div className="absolute w-18 h-18 top-4 right-4 capitalize bg-purple text-slate-100 rounded-full flex flex-col items-center justify-center">
                    day
                    <span className="font-semibold">80</span>
                </div>
                <img src="/images/article-default-thumbnail.png" className="w-full h-full bg-transparent " alt="" />
            </div>
        </div>
    );
}

export default ArticleList;