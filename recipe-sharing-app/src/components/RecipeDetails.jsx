import useRecipeStore from "../store/useRecipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id)),
  );
  if (!recipe) return <p>Recipe not Found</p>;
  return (
    <div>
      <h3>Recipe Title: {recipe.title}</h3>
      <p>Recipe Description: {recipe.description}</p>
      <DeleteRecipeButton recipeId={recipe.id} />
      <EditRecipeForm recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
