import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, title, image, description, instructions, ingredients } =
        props.recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="mr-4 md:mr-6 mb-4 md:mb-6 text-center w-full md:w-[30%] p-5 rounded-lg shadow-md hover:scale-105 duration-200"
        >
            <img className="w-4/5 md:w-full mx-auto" src={image} alt={title} />
            <h1 className="mt-5 mb-3 text-lg md:text-xl font-semibold">{title}</h1>
            <p className="text-sm md:text-base">{description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-5 ">
                <p className="text-center flex-1">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-xs md:text-sm">20min</span>
                </p>
                <p className="text-center flex-1">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-xs md:text-sm">Easy</span>
                </p>
                <p className="text-center flex-1">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-xs md:text-sm">Share</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;
