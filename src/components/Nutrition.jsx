function Nutrition() {
    return (
        <div className="pb-4 md:py-0">
            <h2 className="font-young-serif font-medium text-2xl md:text-3xl text-brown-800">
                Nutrition
            </h2>
            <p className="py-4 text-stone-600">
                The table below shows nutritional values per serving without the
                additional fillings.
            </p>

            <div className="divide-y divide-stone-150">
                <div className="flex items-center justify-between py-2">
                    <span className="flex-1 text-stone-600 pl-6">Calories</span>
                    <span className="flex-1 font-semibold text-brown-800">
                        277kcal
                    </span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <span className="flex-1 text-stone-600 pl-6">Carbs</span>
                    <span className="flex-1 font-semibold text-brown-800">
                        0g
                    </span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <span className="flex-1 text-stone-600 pl-6">Protein</span>
                    <span className="flex-1 font-semibold text-brown-800">
                        20g
                    </span>
                </div>
                <div className="flex items-center justify-between py-2">
                    <span className="flex-1 text-stone-600 pl-6">Fat</span>
                    <span className="flex-1 font-semibold text-brown-800">
                        22g
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nutrition;
