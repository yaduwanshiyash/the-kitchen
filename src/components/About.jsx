import React from "react";

const About = () => {
    return (
        <div className="w-full md:w-[70%] m-auto mt-10 p-10 bg-green-100 rounded-lg">
            <h1 className="text-4xl md:text-7xl mt-5 font-extrabold text-green-600 mb-5 md:mb-10">
                LET'S TALK ABOUT WHAT WE ARE
            </h1>
            <button className="rounded-md text-sm md:text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                Contact me &nbsp; &#8594;
            </button>
        </div>
    );
};

export default About;
