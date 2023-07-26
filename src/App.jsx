/* React and Stylesheet Imports */
import { React, useEffect, useState } from "react";
import "./App.css";
/* Router Imports */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Component Imports */
import NavBar from "./Components/NavBar/NavBar";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
/* Data Pages */
import AuthPage from "./Components/AuthPage/AuthPage";
import CuisinePage from "./Components/CuisinePage/CuisinePage";
import IngredientsPage from "./Components/IngredientsPage/IngredientsPage";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import RecipeBookPage from "./Components/RecipeBookPage/RecipeBookPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import GroceryListPage from "./Components/GroceryListPage/GroceryListPage";
import RecipePage from "./Components/RecipePage/RecipePage";
import TestingPage from "./Components/TestingPage/TestingPage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
/* MUI Framework Imports */
import { Container } from "@mui/material";

function App() {
  /* 
    Registartion and Login handling
  */

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = Cookies.get("token");
    };
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const navigate = useNavigate();

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
        setIsLoggedIn(true);
        // navigate('/');
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
    // setIsLoggedIn(true);

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
        localStorage.setItem("Chef_token", token);
        //Successful Login
        setIsLoggedIn(true);
        // navigate('/');
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

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Container
          maxWidth="false"
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NavBar
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
          />

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route
              path="/authenticate"
              element={
                isLoggedIn ? (
                  <Landing />
                ) : (
                  <AuthPage onRegister={onRegister} handleLogin={handleLogin} />
                )
              }
            ></Route>
            <Route path="/user-profile" element={<ProfilePage />}></Route>
            <Route path="/create-recipe" element={<CuisinePage />}></Route>
            <Route path="/ingredients" element={<IngredientsPage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="/recipe-book" element={<RecipeBookPage />}></Route>
            <Route path="/grocery-list" element={<GroceryListPage />}></Route>
            <Route path="/recipe-result" element={<RecipePage />}></Route>
            <Route path="/testing" element={<TestingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
