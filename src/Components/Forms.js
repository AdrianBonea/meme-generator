import React from "react";
import memeData from "../memeData";

export default function Forms() {
  // const [memeImage, setMemeImage] = React.useState(""); // useState with empthy string

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  }); // object state for text and img

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeImg() {
    const memeArray = allMemeImages.data.memes; //getting the meme data that we need from "API"
    const randomNumber = Math.floor(Math.random() * memeArray.length); // random number
    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    })); //setting the new state of our object
  }
  return (
    <main>
      <div className="absolute top-[150px] left-16">
        <div className="flex flex-col gap-8 w-[450px]">
          <div className="flex flex-row gap-5 ">
            <input
              className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3 w-[215px]"
              placeholder="Insert first text"
            ></input>
            <input
              className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3 w-[215px]"
              placeholder="Insert second text"
            ></input>
          </div>
          <button
            type="button"
            onClick={getMemeImg}
            className="bg-gradient-to-r from-[#672280] to-[#A626D3] 
                     py-2 px-3 rounded-md text-white shadow-lg hover:text-gray-100"
          >
            Get a new meme image 🖼
          </button>
          {/*clicking we will call getMemeImg and will update the state to the new one, makeing the img appear*/}
          <img src={meme.randomImage} className="h-auto" />
          {/*don't use alt values because we need nothing to be there at the beginning*/}
        </div>
      </div>
    </main>
  );
}
