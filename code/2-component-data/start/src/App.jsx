import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList
import IngredientList from './IngredientList'
import Challenge from './Challenge';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        cooking: [
            { description: 'Add cut potatoes to a pot of heavily salted water.', key: 0 },
            { description: 'Bring pot to a boil.', key: 1 },
            { description: 'Boil the potatoes until fork tender, about 15-20 minutes.', key: 2 },
            { description: 'Strain the potatoes.', key: 3 },
            { description: 'Return potatoes to pot.', key: 4 },
            { description: 'Add butter, cream, salt, and pepper to taste.', key: 5 },
            { description: 'Mash potatoes.', key: 6 },
            { description: 'Reseason and add butter and cream as desired.', key: 7 }
        ],
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            <Challenge cooking={recipe.cooking} />
        </article>
    )
}

export default App;
