import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { recipes } = useSelector((state) => state.recipeReducer);

    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [ingredients, setingredients] = useState("");
    const [instructions, setinstructions] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions,
        };

        localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
        dispatch(asyncgetrecipies());
        toast.success("Recipe Created Successfully!");
        navigate("/recipes");
    };

    return (
        <form onSubmit={SubmitHandler} className="w-full md:w-[70%] m-auto pb-5">
            <h1 className="text-4xl md:text-7xl mt-5 font-extrabold text-green-600 mb-5 md:mb-10">
                Create <br /> New Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-4 md:px-6 py-3 text-base md:text-lg mb-4 md:mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-4 md:px-6 py-3 text-base md:text-lg mb-4 md:mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-4 md:px-6 py-3 text-base md:text-lg mb-4 md:mb-5"
                placeholder="Recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-4 md:px-6 py-3 text-base md:text-lg mb-4 md:mb-5"
                placeholder="Recipe ingredients (use commas to separate)..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-4 md:px-6 py-3 text-base md:text-lg mb-4 md:mb-5"
                placeholder="Recipe instructions (use commas to separate)..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-sm md:text-xl bg-green-600 text-white py-2 px-4 md:px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
