import React from "react";

export const Card = ({ date, title }) => {
  return (
    <div className="bg-gradient-to-br from-purple to-pink-500 p-8 rounded-2xl text-white shadow-md hover:cursor-pointer min-w-[300px] lg:min-w-[400px] aspect-square flex flex-col justify-between hover:scale-95 duration-150">
      <p className="text-base lg:text-lg">{date}</p>
      <h2 className="text-2xl lg:text-3xl font-medium font-baim">{title}</h2>
    </div>
  );
};
