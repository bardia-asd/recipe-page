import image from "../assets/images/image-omelette.jpeg";
import PreparationTime from "./PreparationTime";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";

function RecipeCard() {
    return (
        <>
            <div className="space-y-4 md:space-y-6 md:p-7 bg-white md:rounded-2xl">
                <img
                    src={image}
                    alt="Recipe"
                    className="w-full h-auto md:rounded-lg object-cover"
                />
                <div className="space-y-4 md:space-y-5 px-5 md:px-0">
                    <h1 className="font-young-serif font-semibold text-3xl md:text-4xl">
                        Simple Omelette Recipe
                    </h1>
                    <p className="text-stone-600">
                        An easy and quick dish, perfect for any meal. This
                        classic omelette combines beaten eggs cooked to
                        perfection, optionally filled with your choice of
                        cheese, vegetables, or meats.
                    </p>
                    <PreparationTime />
                    <Ingredients />
                    <Instruction />
                    <Nutrition />
                </div>
            </div>
        </>
    );
}

export default RecipeCard;
