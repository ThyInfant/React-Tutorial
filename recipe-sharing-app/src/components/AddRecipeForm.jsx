import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";
import "./style.css";
import { Link } from "react-router-dom";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    addRecipe({
      id: Date.now(),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="title-input"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="description-input"
      />
      <button type="submit" className="add-button">
        Add Recipe
      </button>
      {error && <h4 className="is-error">{error}</h4>}
      <button
        style={{
          marginTop: "15px",
          padding: "5px",
          border: "1px solid purple",
          borderRadius: "5px",
        }}
      >
        <Link to={"/favoriteRecipe"} style={{ textDecoration: "none" }}>
          Favorite Recipes
        </Link>
      </button>
    </form>
  );
};

export default AddRecipeForm;
