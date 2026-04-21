// App.jsx
import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import FavoriteLists from "./components/FavoriteLists";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favoriteRecipe" element={<FavoriteLists />} />
      </Routes>
    </>
  );
}

export default App;
