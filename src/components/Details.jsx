import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/actions/recipeActions";

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes.find((r) => r.id == params.id);

    const DeleteHandler = () => {
        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes.filter((r) => r.id != params.id))
        );
        dispatch(asyncgetrecipies());
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <div className="w-full md:w-[80%] m-auto p-5">
            <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex flex-col md:flex-row h-auto md:h-[75vh] mt-3">
                <div className="dets w-full md:w-[50%] p-3 md:p-[3%] shadow mb-5 md:mb-0">
                    <img className="w-full" src={recipe.image} alt={recipe.title} />
                    <h1 className="text-xl mb-5 mt-5 md:mt-[10%] text-center">
                        {recipe.title}
                    </h1>
                    <p className="text-zinc-400">{recipe.description}</p>
                    <div className="flex justify-between py-5 md:py-10 px-3 md:px-5">
                        <Link
                            to={`/update-recipe/${params.id}`}
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="text-red-400 border-red-400 border py-2 px-5"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="desc w-full md:w-[50%] px-3 md:px-[5%] py-3 md:py-[3%] overflow-auto">
                    <h1 className="text-2xl md:text-3xl border-b border-green-600 text-green-600 mb-3 md:mb-5">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc p-3">
                        {recipe.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-2xl md:text-3xl border-b border-green-600 text-green-600 mb-3 md:mb-5">
                        Instructions
                    </h1>
                    <ul className="text-zinc-600 list-decimal p-3">
                        {recipe.instructions.split(".").map((d, i) => (
                            <li className="list-item text-sm mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="w-full text-center text-2xl md:text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Details;
