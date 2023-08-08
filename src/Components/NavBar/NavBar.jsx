// Importing necessary components and hooks from the react, react-router-dom, and material-ui libraries
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { SvgIcon, Typography, useMediaQuery, useTheme } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
          {/* Links to different sections of the page that scroll smoothly */}
          {/* 'to' prop of ScrollLink component represents the id of the section to scroll to */}
          
          <ScrollLink to="info" smooth={true}>
            <Link to="/"> {/* Assuming '/' is the route for your landing page */}
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
                top: 8
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
                top: 10
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
          minHeight: "7vh"
        }}
        // minHeight: "8vh"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SvgIcon fontSize="large" sx={{ color: 'white' }}>
              <path
                  d="M15.5,5.5C15.5,4.67,16.17,4,17,4C17.83,4,18.5,4.67,18.5,5.5V8h1V5.5C19.5,3.57,17.93,2,16,2
c-1.93,0-3.5,1.57-3.5,3.5V8h1V5.5z M12,5.5C12,3.57,10.43,2,8.5,2C6.57,2,5,3.57,5,5.5V8h1V5.5C6,4.67,6.67,4,7.5,4
C8.33,4,9,4.67,9,5.5V8h3V5.5z M15.74,8L14,9.74V10h-4v-0.26L8.26,8H15.74z M3.37,9l-1.74,1.74L3.37,12H1v2h2v2h2v-2h6v2h2v-2h2v-2
h-2.37l1.74-1.74L18.63,9H3.37z M11,16h-1v1H9v-1H8v-1h1v-1h1v1h1V16z"
                />
                </SvgIcon>
            </IconButton>
          </Link>
          <Link to="/">
            <Typography sx={{ color: '#eabd0b', fontSize: 25, fontFamily: "cursive" }}>Chef Compass</Typography>
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
                    top: 8
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
                    top: 8
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
                      top: 10
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
                      top:10,
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
                  to="/grocery-book"
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
