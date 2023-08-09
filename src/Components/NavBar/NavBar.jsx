import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../Logo/Logo.png";


export default function NavBar({ isLoggedIn, handleLogout }) {
  // Using React's useState hook to initialize and handle the state of anchorEl and mobileOpen
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Using MUI's useTheme and useMediaQuery hooks to check if the current screen size is 'lg' or smaller
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Using react-router-dom's useLocation hook to access the location object that represents the current URL
  const location = useLocation(); //to get location of page in order to place something there

  // Function to toggle mobileOpen state
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Function to handle the opening of the user menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Function to handle the closing of the user menu and logout if clicked on 'Logout'
  const handleClose = (e) => {
    if (e.target.innerText === "Logout") {
      handleLogout();
    }
    setAnchorEl(null);
  };

  const renderLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <ScrollLink to="info" smooth={true}>
            <Link to="/"> 
                <MenuItem
                    sx={{
                        fontFamily: "Times New Roman",
                        color: '#eabd0b',
                        fontSize: 25,
                        fontWeight: "bold",
                        right: 20,
                        top: 5,
                        border: 3,
                        borderColor: '#eabd0b'
                    }}
                >
                    Get Started
                </MenuItem>
            </Link>
        </ScrollLink>
          {/* Mix link is a regular link using react-router-dom's Link component to a new page '/create-recipe' */}
          <Link to="/create-recipe">
            <MenuItem
              sx={{
                fontFamily: "Times New Roman",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                right: 15,
                top: 8,
              }}
            >
              Mix
            </MenuItem>
          </Link>

          {/* User Menu containing links to My Account page and Logout option */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/user-profile">
              <MenuItem onClick={handleClose} sx={{ fontFamily: "Italiana" }}>
                My Account
              </MenuItem>
            </Link>
            <Link to="/">
              <MenuItem onClick={handleLogout} sx={{ fontFamily: "Italiana" }}>
                Logout
              </MenuItem>
            </Link>
          </Menu>
        </>
      );
    } else {
      return (
        <>
          <ScrollLink to="info" smooth={true}>
            <MenuItem
              sx={{
                fontFamily: "Times New Roman",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                left: -510,
                top: 10,
              }}
            >
              About
            </MenuItem>
          </ScrollLink>
          <ScrollLink to="how-to" smooth={true}>
            <MenuItem
              sx={{
                fontFamily: "Times New Roman",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              How To
            </MenuItem>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true}>
            <MenuItem
              sx={{
                fontFamily: "Times New Roman",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Contact
            </MenuItem>
          </ScrollLink>
          <Link to="/authenticate">
            <MenuItem
              sx={{
                fontFamily: "Times New Roman",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Sign In
            </MenuItem>
          </Link>
        </>
      );
    }
  };

  return (
    <Box sx={{ width: "100%", margin: 0 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#90323D",
          boxShadow: "none",
          width: "100%",
          margin: 0,
          minHeight: "7vh",
        }}
        // minHeight: "8vh"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <IconButton
                sx={{ width: "5rem", height: "5rem" }}
              >
                <img src= {Logo}  style={{ width: "100%", height: "100%", margin: "0" }}
/>
              </IconButton>
            </Link>
            <Link to="/">
              <Typography
                sx={{ color: "#eabd0b", fontSize: 25, fontFamily: "cursive" }}
              >
                Chef Compass
              </Typography>
            </Link>
          </div>

          {/* Check if not mobile view and not logged in, if true display get started, recipe book, and sign in links */}
          {!isMobile && !isLoggedIn && (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
               <ScrollLink to="info" smooth={true}>
                  <Link to="/"> 
                      <MenuItem
                          sx={{
                              fontFamily: "Times New Roman",
                              color: '#eabd0b',
                              fontSize: 25,
                              fontWeight: "bold",
                              right: 20,
                              top: 5,
                              border: 3,
                              borderColor: '#eabd0b'
                          }}
                      >
                          Get Started
                      </MenuItem>
                  </Link>
              </ScrollLink>
              <Link to="/recipe-book">
                <MenuItem
                  sx={{
                    fontFamily: "Times New Roman",
                    color: "white",
                    fontSize: 25,
                    fontWeight: "bold",
                    right: 15,
                    top: 8,
                  }}
                >
                  Recipe Book
                </MenuItem>
              </Link>
              <Link to="/authenticate">
                <MenuItem
                  sx={{
                    fontFamily: "Times New Roman",
                    color: "white",
                    fontSize: 25,
                    fontWeight: "bold",
                    right: 15,
                    top: 8,
                  }}
                >
                  Sign In
                </MenuItem>
              </Link>
            </Box>
          )}
          {/* Check if not mobile view and logged in, if true display rendered links and user menu except for certain routes */}
          {!isMobile &&
            isLoggedIn &&
            !(
              location.pathname === "/create-recipe" ||
              location.pathname === "/ingredients" ||
              location.pathname === "/recipe-result" ||
              location.pathname === "/recipe-book" ||
              location.pathname === "/grocery-list" ||
              location.pathname === "/user-profile"
            ) && (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {renderLinks()}
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle sx={{ color: '#eabd0b', mt: 0, fontSize: "3rem" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/user-profile">
                      <MenuItem
                        onClick={handleClose}
                        sx={{ fontFamily: "Italiana", fontSize: 20, color: 'black' }}
                      >
                        My Account
                      </MenuItem>
                    </Link>
                    <Link to="/">
                      <MenuItem
                        onClick={handleClose}
                        sx={{ fontFamily: "Italiana", fontSize: 20, color: 'black' }}
                      >
                        Logout
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
              </Box>
            )}

          {/* If mobile view and logged in, display menu icon button for navigation drawer */}
          {isMobile && isLoggedIn && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          )}

          {isMobile && !isLoggedIn && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          )}

          {/* Check if not mobile view and logged in, if true display Mix, Recipe Book, Grocery List, and user menu for certain routes */}
          {!isMobile &&
            isLoggedIn &&
            (location.pathname === "/create-recipe" ||
              location.pathname === "/ingredients" ||
              location.pathname === "/recipe-result" ||
              location.pathname === "/recipe-book" ||
              location.pathname === "/grocery-list" ||
              location.pathname === "/user-profile") && (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/create-recipe">
                  <MenuItem
                    sx={{
                      fontFamily: "Times New Roman",
                      color: "white",
                      fontSize: 25,
                      fontWeight: "bold",
                      left: -700,
                      top: 10,
                    }}
                  >
                    Mix
                  </MenuItem>
                </Link>
                <Link to="/recipe-book">
                  <MenuItem
                    sx={{
                      fontFamily: "Times New Roman",
                      color: "white",
                      fontSize: 25,
                      fontWeight: "bold",
                      right: 560,
                      top: 10,
                    }}
                  >
                    Recipe Book
                  </MenuItem>
                </Link>
                <Link to="/grocery-list">
                  <MenuItem
                    sx={{
                      fontFamily: "Italiana",
                      color: "white",
                      fontSize: 25,
                      fontWeight: "bold",
                      right: 440,
                      top: 10,
                    }}
                  >
                    Grocery List
                  </MenuItem>
                </Link>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle sx={{ color: '#eabd0b', mt: 0, fontSize: "3rem" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/user-profile">
                      <MenuItem
                        onClick={handleClose}
                        sx={{ fontFamily: "Italiana", fontSize: 20, color: 'black' }}
                      >
                        My Account
                      </MenuItem>
                    </Link>
                    <Link to="/">
                      <MenuItem
                        onClick={handleClose}
                        sx={{ fontFamily: "Italiana", fontSize: 20, color: 'black' }}
                      >
                        Logout
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
              </Box>
            )}
        </Toolbar>
      </AppBar>

      {/* Navigation drawer for mobile view */}
      <Drawer anchor={"right"} open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {/* Check if not logged in, if true display sign in and recipe book link */}
          {!isLoggedIn && (
            <>
              <ListItem key={"Recipe Book"} component={Link} to="/recipe-book">
                <ListItemText primary={"Recipe Book"} />
              </ListItem>
              <ListItem key={"Sign In"} component={Link} to="/authenticate">
                <ListItemText primary={"Sign In"} />
              </ListItem>
            </>
          )}

          {/* // Check if logged in and not on certain routes, if true display My Account, Mix, and Logout links */}
          {isLoggedIn &&
            !(
              location.pathname === "/create-recipe" ||
              location.pathname === "/ingredients" ||
              location.pathname === "/recipe-result" ||
              location.pathname === "/recipe-book" ||
              location.pathname === "/grocery-list" ||
              location.pathname === "/user-profile"
            ) && (
              <>
                <ListItem
                  key={"My Account"}
                  component={Link}
                  to="/user-profile"
                >
                  <ListItemText primary={"My Account"} />
                </ListItem>
                <ListItem key={"Mix"} component={Link} to="/create-recipe">
                  <ListItemText primary={"Mix"} />
                </ListItem>
                <ListItem
                  key={"Logout"}
                  component={Link}
                  to="/"
                  onClick={handleLogout}
                >
                  <ListItemText primary={"Logout"} />
                </ListItem>
              </>
            )}

          {/* Check if logged in and on certain routes, if true display My Account, Mix, Recipe Book, Grocery List, and Logout links */}
          {isLoggedIn &&
            (location.pathname === "/create-recipe" ||
              location.pathname === "/ingredients" ||
              location.pathname === "/recipe-result" ||
              location.pathname === "/recipe-book" ||
              location.pathname === "/grocery-list" ||
              location.pathname === "/user-profile") && (
              <>
                <ListItem
                  key={"My Account"}
                  component={Link}
                  to="/user-profile"
                >
                  <ListItemText primary={"My Account"} />
                </ListItem>
                <ListItem key={"Mix"} component={Link} to="/create-recipe">
                  <ListItemText primary={"Mix"} />
                </ListItem>
                <ListItem
                  key={"Recipe Book"}
                  component={Link}
                  to="/recipe-book"
                >
                  <ListItemText primary={"Recipe Book"} />
                </ListItem>
                <ListItem
                  key={"Grocery List"}
                  component={Link}
                  to="/grocery-list"
                >
                  <ListItemText primary={"Grocery List"} />
                </ListItem>
                <ListItem
                  key={"Logout"}
                  component={Link}
                  to="/"
                  onClick={handleLogout}
                >
                  <ListItemText primary={"Logout"} />
                </ListItem>
              </>
            )}
        </List>
      </Drawer>
    </Box>
  );
}
