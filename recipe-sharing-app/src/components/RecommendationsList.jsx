// components/RecommendationsList.jsx
import { useEffect } from "react";
import useRecipeStore from "../store/useRecipeStore";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Generate recommendations when favorites change or component mounts
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations();
    }
  }, [favorites, recipes.length, generateRecommendations]);

  if (recipes.length === 0) {
    return null;
  }

  if (recommendations.length === 0) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          marginTop: "30px",
        }}
      >
        <h2>🎯 Recommended For You</h2>
        <p style={{ color: "#666", marginTop: "10px" }}>
          {favorites.length === 0
            ? "Add some favorites to get personalized recipe recommendations!"
            : "Loading recommendations..."}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0b2e46",
        borderRadius: "8px",
        marginTop: "30px",
      }}
    >
      <h2>🎯 Recommended For You</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Based on {favorites.length} favorite recipe(s)
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor: "#3498db",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description.substring(0, 80)}...</p>
            <div style={{ marginTop: "10px" }}>
              <Link to={`/recipe/${recipe.id}`}>
                <button
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    backgroundColor: "#4299e1",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  View Recipe
                </button>
              </Link>
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
