import React from 'react';
import pngegg from '.././assets/logo.svg';

const Hero = () => {
  return (
    <header className="w-full justify-center items-center flec-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={pngegg} alt="Logo" className="w-28 object-contain"/>
            <button type="button" onClick={()=>window.open('https://github.com/')} className="black_btn">
                GitHub
            </button>
        </nav>
        <h1 className="head_text">Summarize Articles with <br  className="max-md:hidden"/> 
            <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="desc" >
            This transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero;
