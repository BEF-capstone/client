import { useState } from "react";
/* REACT COMPONENTS */
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import AuthPage from "./Components/AuthPage/AuthPage";
import Profile from "./Components/Profile/Profile";
import CuisinePage from "./Components/CuisinePage/CuisinePage";
import IngredientsPage from "./Components/IngredientsPage/IngredientsPage";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import RecipeBook from "./Components/RecipeBook/RecipeBook";
import GroceryList from "./Components/GroceryList/GroceryList";
import RecipePage from "./Components/RecipePage/RecipePage";
import Footer from "./Components/Footer/Footer";
/* REACT BROWSER ROUTER */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/authenticate" element={<AuthPage />}></Route>
            <Route path="/user-profile" element={<Profile />}></Route>
            <Route path="/create-recipe" element={<CuisinePage />}></Route>
            <Route path="/ingredients" element={<IngredientsPage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="/recipe-book" element={<RecipeBook />}></Route>
            <Route path="/grocery-list" element={<GroceryList />}></Route>
            <Route path="/recipe-result" element={<RecipePage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
