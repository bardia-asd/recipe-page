function Instruction() {
    return (
        <div className="pb-4 md:pb-6 border-b border-stone-150">
            <h2 className="font-young-serif font-medium text-2xl md:text-3xl text-brown-800">
                Instructions
            </h2>

            <ul className="flex flex-col gap-2 mt-3 pl-5 list-decimal marker:text-brown-800">
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Beat the eggs:
                    </span>
                    <span className="text-stone-600">
                        In a bowl, beat the eggs with a pinch of salt and pepper
                        until they are well mixed. You can add a tablespoon of
                        water or milk for a fluffier texture.
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Heat the pan:
                    </span>
                    <span className="text-stone-600">
                        Place a non-stick frying pan over medium heat and add
                        butter or oil.
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Cook the omelette:
                    </span>
                    <span className="text-stone-600">
                        Once the butter is melted and bubbling, pour in the
                        eggs. Tilt the pan to ensure the eggs evenly coat the
                        surface.
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Add fillings (optional):
                    </span>
                    <span className="text-stone-600">
                        When the eggs begin to set at the edges but are still
                        slightly runny in the middle, sprinkle your chosen
                        fillings over one half of the omelette.
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Fold and serve:
                    </span>
                    <span className="text-stone-600">
                        As the omelette continues to cook, carefully lift one
                        edge and fold it over the fillings. Let it cook for
                        another minute, then slide it onto a plate.
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Enjoy:
                    </span>
                    <span className="text-stone-600">
                        Serve hot, with additional salt and pepper if needed.
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Instruction;
