function Ingredients() {
    return (
        <div className="pb-4 md:pb-6 border-b border-stone-150">
            <h2 className="font-young-serif font-medium text-2xl md:text-3xl text-brown-800">
                Ingredients
            </h2>

            <ul className="flex flex-col gap-2 mt-3 pl-5 list-disc marker:text-brown-800">
                <li>
                    <span className="ml-3">2-3 large eggs</span>
                </li>
                <li>
                    <span className="ml-3">Salt, to taste</span>
                </li>
                <li>
                    <span className="ml-3">Pepper, to taste</span>
                </li>
                <li>
                    <span className="ml-3">1 tablespoon of butter or oil</span>
                </li>
                <li>
                    <span className="ml-3">
                        Optional fillings: cheese, diced vegetables, cooked
                        meats, herbs
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Ingredients;
