import { useState, useEffect } from "react";
import useRecipeStore from "../store/useRecipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId),
  );

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipeId, {
      title: title,
      description: description,
    });
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
