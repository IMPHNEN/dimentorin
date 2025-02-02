import { Icon } from "@iconify/react";
import React from "react";

function GoalList({ className }) {
    return (
        <div className={`bg-white/10 rounded-xl flex items-center justify-center gap-5 py-6 px-8 ${className}`}>
            <img className="w-14 h-fit bg-transparent" src="/images/stonk.png" alt="" />
            <div className="flex flex-col gap-2">
                <h2 className="capitalize text-gray-200 text-sm">goals</h2>
                <h3 className="capitalize font-semibold text-slate-100">make 10 article each day</h3>
                <p className="text-gray-300 text-xs font-light capitalize">every goals done with got free token</p>
            </div>
        </div>
    );
}

export default GoalList;