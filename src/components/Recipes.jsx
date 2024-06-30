import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipes = () => {
    const { recipes } = useSelector((state) => state.recipeReducer);
    const { pathname } = useLocation();

    return (
        <div className="w-full p-5">
            <h1 className="text-center text-2xl md:text-4xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400 mt-2 md:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
            </p>
            <div className="recipe-cards mt-5 md:mt-10 flex flex-wrap justify-center gap-5">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-2xl md:text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
            </div>
            {pathname === "/recipes" && (
                <Link
                    to="/create-recipe"
                    className="cursor-pointer rounded-md fixed top-[10%] left-[5%] md:top-[15%] md:left-[10%] py-2 px-5 bg-green-200 flex items-center gap-x-3"
                >
                    <i className="text-2xl md:text-3xl text-green-600 ri-add-box-line"></i>
                    <span className="hidden md:block">Create Recipe</span>
                </Link>
            )}
        </div>
    );
};

export default Recipes;
