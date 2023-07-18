import React, { useState, useEffect, useRef } from "react";


const textTyped = 'Discover, Analyze, and Buy Polygon NFTs easily.'


function Hero() {

  const [typedWord, setTypedWord] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedWord(textTyped.slice(0, typedWord.length + 1))
    }, 300)

    return () => { clearTimeout(timeout) }
  }, [typedWord])


  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-[130px] mb-[60px] flex flex-col gap-[5] items-center  text-center justify-center ">
          <p className="text-[20px] font-[300] text-white ">Welcome to Mintyplex!</p>
          <h1 className=" md:text-[58px] text-[32px] font-[700] max-w-[750px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 custom" >{typedWord}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
