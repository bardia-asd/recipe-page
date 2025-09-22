import { useState } from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
    return (
        <>
            <div className="container max-w-4xl mx-auto md:px-4">
                <RecipeCard />
            </div>
        </>
    );
}

export default App;
