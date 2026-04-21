import React from "react";
import useRecipeStore from "../store/useRecipeStore";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const recipesToDisplay = searchTerm === "" ? recipes : filteredRecipes;

  if (recipesToDisplay.length === 0) {
    return (
      <div className="recipe-list">
        <h2>My Recipe Collection</h2>
        {searchTerm !== "" && (
          <div className="empty-state">
            <p>🔍 No recipes matching "{searchTerm}" found.</p>
          </div>
        )}
        {searchTerm === "" && (
          <div className="empty-state">
            <p>🔎 No recipes yet. Add your first recipe above!</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <h2>My Recipe Collection</h2>
      {searchTerm !== "" && (
        <div className="search-info">
          🔍 Showing {recipesToDisplay.length} result(s) for "{searchTerm}"
        </div>
      )}
      <div className="recipe-grid">
        {recipesToDisplay.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 100)}...</p>
            <Link to={`/recipe/${recipe.id}`}>
              <button style={{ marginRight: "10px", padding: "5px 10px" }}>
                View Recipe
              </button>
            </Link>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

// {
//   recipes.map((recipe) => (
//     <div key={recipe.id}>
//       <h3>{recipe.title}</h3>
//       <p>{recipe.description}</p>
//       <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
//     </div>
//   ));
// }
