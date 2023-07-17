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
import { Container } from "@mui/material";

function App() {
  const onRegister = async (
    first_name,
    last_name,
    username,
    email,
    password
  ) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          username,
          email,
          password,
        }),
      });

      //wait for the response
      const data = await response.json();

      if (response.ok) {
        console.log(response); //optional - display a success message
        const { token } = response;
        //Registration successful
        setisLoggedIn(true);
      } else {
        logoutUser();
        //Registration failed
        // console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data, response);
      if (response.ok) {
        const { token } = data;
        localStorage.setItem("lifetracker_token", token);
        //Successful Login
        setisLoggedIn(true);
        setLoginError("");
        // setUserId(response.data.user.id)
        //gives hte values for usere id that then i can use in out files to do it

        //define this
        console.log(data.message); //optional - display a success message
      } else {
        //Login failed
        setLoginError(data.message);
        console.log(data.message); //optional - display error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/authenticate"
            element={
              <AuthPage onRegister={onRegister} handleLogin={handleLogin} />
            }
          ></Route>
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
    </Container>
  );
}

export default App;
