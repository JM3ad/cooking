import React, {useState} from 'react';
import 'app/pages/Pages.scss';
import { Recipe } from 'app/models/recipe';

const RecipeGenerator: React.FC = () => {
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
    const addIngredient = () => {
        const newData = [...ingredients, ""]
        setIngredients(newData);
    };
    const updateIngredient = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const newIngredients = [...ingredients];
        newIngredients[i] = e.target.value;
        setIngredients(newIngredients);
    };

    const generateJson = () => {
        const recipe: Recipe = {
            name: recipeName,
            url: url,
            ingredients: ingredients,
            method: steps
        };
        setJson(JSON.stringify(recipe));
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(json);
    };

    return <div className="app-page">
        <label>Name</label>
        <input value={recipeName} onChange={updateRecipe}></input>
        <label>URL</label>
        <input value={url} onChange={updateUrl}></input>
        <label>Ingredients</label>
        {
            ingredients.map((ingredient, i) => {
                return <input key={i} value={ingredient} onChange={(e) => updateIngredient(i, e)} />
            })
        }
        <button onClick={addIngredient}>+</button>
        <label>Method</label>
        <button onClick={generateJson}>Generate JSON</button>
        <div>
            {json}
        </div>
        <button onClick={copyToClipboard}>Copy to clipboard</button>
    </div>;
};

export default RecipeGenerator;