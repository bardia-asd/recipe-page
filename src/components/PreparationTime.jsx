function PreparationTime() {
    return (
        <div className="p-4 md:p-5 rounded-lg bg-rose-50">
            <h3 className="font-semibold text-lg md:text-xl text-rose-800">
                Preparation time
            </h3>
            <ul className="flex flex-col gap-2 mt-3 pl-5 list-disc marker:text-rose-800">
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Total:
                    </span>
                    <span className="text-stone-600">
                        Approximately 10 minutes
                    </span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Preparation:
                    </span>
                    <span className="text-stone-600">5 minutes</span>
                </li>
                <li>
                    <span className="ml-3 mr-1 font-semibold text-stone-600">
                        Cooking:
                    </span>
                    <span className="text-stone-600">5 minutes</span>
                </li>
            </ul>
        </div>
    );
}

export default PreparationTime;
