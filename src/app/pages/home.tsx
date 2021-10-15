import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTags } from 'app/services/recipe-service';


const Home: React.FC = () => {
    const allTags = getAllTags();

    return (
        <div className="app-page">
            <h1>Categories</h1>
            {
                allTags.map((tag) => {
                    return <Link
                        className="recipe-link"
                        key={tag}
                        to={`/recipes/${tag}`}
                    >
                        {tag}
                    </Link>;
                })
            }
        </div>
    );
}

export default Home;
