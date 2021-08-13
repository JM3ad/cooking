import React, {useEffect, useState} from 'react';
import { Recipe } from 'app/models/recipe';
import MultiLineInput from 'app/components/multi-line-input';

type RecipeProps = {
    recipe: Recipe | null;
};

const RecipeGenerator: React.FC<RecipeProps> = (props: RecipeProps) => {
    const [recipeName, setRecipeName] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [steps, setSteps] = useState<string[]>([]);
    const [json, setJson] = useState<string>("");
    const updateRecipe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecipeName(e.target.value);
    };
    const updateUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };
    const generateJson = () => {
        const recipe: Recipe = {
            name: recipeName,
            url: url,
            ingredients: ingredients.filter((entry) => entry.trim().length > 0),
            method: steps.filter((entry) => entry.trim().length > 0)
        };
        return JSON.stringify(recipe);
    };
    const displayJson = () => {
        setJson(generateJson());
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generateJson());
    };
    useEffect(() => {
        const recipe = props.recipe;
        if (recipe) {
            setRecipeName(recipe.name);
            if (recipe.ingredients) setIngredients(recipe.ingredients);
            if (recipe.url) setUrl(recipe.url);
            if (recipe.method) setSteps(recipe.method);
        }
    }, [props]);

    return <div className="app-page">
        <label>Name</label>
        <input value={recipeName} onChange={updateRecipe}></input>
        <label>URL</label>
        <input value={url} onChange={updateUrl}></input>
        <MultiLineInput label="Ingredients" state={ingredients} setState={setIngredients}/>
        <MultiLineInput label="Method" state={steps} setState={setSteps}/>
        <div>
            <button className="action-button" onClick={displayJson}>Display JSON</button>
            <button className="action-button" onClick={copyToClipboard}>Copy to clipboard</button>
        </div>
        <div>
            {json}
        </div>
    </div>;
};

export default RecipeGenerator;