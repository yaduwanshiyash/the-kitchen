import React from "react";

const Home = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[60vh] p-5 lg:p-0">
            <div className="left w-full lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-green-600 text-center lg:text-left">
                    SIMPLE AND TASTY RECIPES
                </h1>
                <p className="text-zinc-400 mt-5 mb-10 text-center lg:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi eos maiores harum doloribus, praesentium alias qui
                    esse id atque sapiente similique quis, velit fugit, nemo
                    unde consectetur voluptatem sequi repellat.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                        Get Started &nbsp; &#8594;
                    </button>
                </div>
            </div>
            <img
                className="w-full lg:w-1/2"
                src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                alt=""
            />
        </div>
    );
};

export default Home;
