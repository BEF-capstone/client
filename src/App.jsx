/* React and Stylesheet Imports */
import React, { useEffect, useState } from "react";
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
import RecipeBookPage from "./Components/RecipeBookPage/RecipeBookPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import GroceryListPage from "./Components/GroceryListPage/GroceryListPage";
import RecipePage from "./Components/RecipePage/RecipePage";
import TestingPage from "./Components/TestingPage/TestingPage";
import RecipeBookTest from "./Components/RecipeBookTest";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
/* MUI Framework Imports */
import { Container } from "@mui/material";
/* Authentication Imports */
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { setUserData, resetUserData } from "./redux/authDataSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  /* Redux Dispatch */
  const dispatch = useDispatch();
  /* Authentication States */
  const loggedIn = useSelector((state) => state.userData.loggedIn);
  const userName = useSelector((state) => state.userData.userName);
  const userId = useSelector((state) => state.userData.userId);
  const [loginError, setLoginError] = useState("");

  /* Registartion and Login handling */
  useEffect(() => {
    checkLoggedIn();
  }, []);

// check if user is logged in
const checkLoggedIn = () => {
  const token = Cookies.get("token");
  if (token) {
    const decodeToken = jwtDecode(token);

    // handle login based on token expiration
    if (decodeToken.exp * 1000 > Date.now()) {
      const loggedInUserData = {
        loggedIn: true,
        userName: decodeToken.userName,
        userId: decodeToken.userId,
      };
      dispatch(setUserData(loggedInUserData));
    } else {
      handleLogout();
    }
  }
};

  const handleLogin = async (data) => {
    try {
      const { token, user, message } = data;
      if (user) {
        Cookies.set("token", token);

        const loggedInUserData = {
          loggedIn: true,
          userName: user.firstname,
          userId: user.id,
        };
        dispatch(setUserData(loggedInUserData));

        // setLoggedIn(true);
        // setLoginError("");
        // console.log(message); // display success login message
        // setUserName(user.firstname);
        // setUserId(user.id);

        //         setLoggedIn(true);
        //         setLoginError("");
        //         console.log(message);
        //         setUserName(user.firstname);
        //         setUserId(user.id);
        //         setUser(user); // updating the user state
      } else {
        setLoginError(message);
        console.log(message);
      }
    } catch (e) {
      console.error(`Login Failed : ${e}`);
    }
  };
  //hello
  const handleRegistration = async (data) => {
    try {
      const { token, user, message } = data;
      if (user) {
        Cookies.set("token", token);

        const loggedInUserData = {
          loggedIn: true,
          userName: user.firstname,
          userId: user.id,
        };
        dispatch(setUserData(loggedInUserData));

        // setLoggedIn(true);
        // console.log(`message: ${message}`);
        // setUserName(user.firstname);
        // setUserId(user.id);

        //         setLoggedIn(true);
        //         console.log(`message: ${message}`);
        //         setUserName(user.firstname);
        //         setUserId(user.id);
        //         setUser(user); // Update the user state here
      } else {
        console.log(`no user message: ${message}`);
      }
    } catch (e) {
      console.error(`Registration Failed: ${e}`);
    }
  };

  // logout user, remove cookie and clear fields
  const handleLogout = () => {
    console.log(`logout`);
    // setLoggedIn(false);
    // setUserName("");
    // setUserId("");
    dispatch(resetUserData());

    Cookies.remove("token");
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
          <NavBar isLoggedIn={loggedIn} handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route
              path="/authenticate"
              element={
                loggedIn ? (
                  <Landing />
                ) : (
                  <AuthPage
                    handleLogin={handleLogin}
                    handleRegistration={handleRegistration}
                  />
                )
              }
            ></Route>
            <Route
              path="/user-profile"
              element={<ProfilePage handleLogout={handleLogout} />}
            />
            <Route path="/create-recipe" element={<CuisinePage />}></Route>
            <Route
              path="/ingredients"
              element={<IngredientsPage userId={userId} />}
            ></Route>
            <Route
              path="/recipe-book"
              element={<RecipeBookPage checkLoggedIn={checkLoggedIn} LoggedIn={loggedIn} />}
            ></Route>
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
