import React from "react";

export default function Forms() {
  return (
    <form className="absolute top-[150px] left-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3"
            placeholder="Insert first text"
          ></input>
          <input
            type="text"
            className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3"
            placeholder="Insert second text"
          ></input>
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-[#672280] to-[#A626D3] 
                     py-2 px-3 rounded-md text-white"
        >
          Get a new meme image 🖼
        </button>
      </div>
    </form>
  );
}
