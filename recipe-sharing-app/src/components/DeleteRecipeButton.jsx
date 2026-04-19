import React from "react";
import useRecipeStore from "../store/useRecipeStore";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  return (
    <div>
      <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
    </div>
  );
}

export default DeleteRecipeButton;
