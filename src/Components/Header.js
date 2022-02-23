import React from "react";

export default function Header() {
  return (
    <header
      className="absolute bg-gradient-to-r from-[#672280] to-[#A626D3] 
                        h-[65px] w-full flex flex-row items-center"
    >
      <div className="absolute flex flex-row pl-10 items-center gap-1">
        <img
          src="./Troll Face.png"
          alt="trollface"
          className="h-[24px] w-auto"
        />
        <h1 className="font-Karla text-white text-3xl font-bold">
          Meme Generator
        </h1>
      </div>
      <h2 className="absolute right-2 font-Karla text-white text-xs ">
        React Project 3
      </h2>
    </header>
  );
}
