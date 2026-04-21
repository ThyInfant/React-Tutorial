import { useState, useEffect } from "react";
import useRecipeStore from "../store/useRecipeStore";

const FavoriteButton = ({ recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  useEffect(() => {
    setIsFavorite(favorites.includes(recipeId));
  }, [favorites, recipeId]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className="favorite-btn"
      style={{
        background: isFavorite ? "#ff4444" : "#cccccc",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!isFavorite) e.target.style.background = "#ff8888";
      }}
      onMouseLeave={(e) => {
        if (!isFavorite) e.target.style.background = "#cccccc";
      }}
    >
      {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
