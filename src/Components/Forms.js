import React from "react";

export default function Forms() {
  // const [memeImage, setMemeImage] = React.useState(""); // useState with empthy string

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  }); // object state for text and img

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    })); //handle the text changes instantlly
  }

  const [allMemes, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function getMemeImg() {
    const memeArray = allMemes; //getting the meme data that we need from API
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
        <form className="flex flex-col gap-8 w-[450px]">
          <div className="flex flex-row gap-5 ">
            <input
              className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3 w-[215px]"
              placeholder="Insert first text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              className="border-2 border-stone-400/50 rounded 
                   caret-stone-400/50 focus:outline-stone-400/80 
                     py-2 px-3 w-[215px]"
              placeholder="Insert second text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
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
        </form>
        <div className="grid justify-items-center text-orange-900	font-bold text-3xl relative my-10">
          <img
            src={meme.randomImage}
            className="absolute z-0 rounded h-[450px] object-cover "
            alt=" "
          />
          <h2 className="z-10 absolute top-[10px] drop-shadow-xl">
            {meme.topText}
          </h2>
          <h2 className="z-0 absolute top-[400px] drop-shadow-xl">
            {meme.bottomText}
          </h2>
        </div>
      </div>
    </main>
  );
}
