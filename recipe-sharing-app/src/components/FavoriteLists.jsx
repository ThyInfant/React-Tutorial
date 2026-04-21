// components/FavoriteLists.jsx
import useRecipeStore from "../store/useRecipeStore";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FavoriteLists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  // Get full recipe objects from favorites IDs
  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe) => recipe !== undefined);

  useEffect(() => {
    // Small delay to ensure recipes are loaded
    if (recipes.length > 0 || favorites.length === 0) {
      setIsLoading(false);
    }

    // If recipes are still loading, wait a bit
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [recipes, favorites]);

  // Show loading state
  if (isLoading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>My Favorite Recipes ❤️</h2>
        <p>Loading your favorites...</p>
      </div>
    );
  }

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>My Favorite Recipes ❤️</h2>
        <p style={{ color: "#666", marginTop: "10px" }}>
          No favorite recipes yet. Click the "Add to Favorites" button on any
          recipe to see it here!
        </p>
        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Browse Recipes
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Favorite Recipes ❤️</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        You have {favoriteRecipes.length} favorite recipe(s)
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#fff5f5",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <small style={{ color: "#666" }}>Recipe ID: {recipe.id}</small>
            <div style={{ marginTop: "10px" }}>
              <Link to={`/recipe/${recipe.id}`}>
                <button
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button
          style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
        >
          Back to All Recipes
        </button>
      </Link>
    </div>
  );
};

export default FavoriteLists;
