import * as React from "react";

import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { SvgIcon } from "@mui/material";

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/create-recipe">
        <button>choose cuisine</button>
      </Link>
      <Link to="/ingredients">
        <button>ingredients</button>
      </Link>
      <Link to="/recipe-result">
        <button>recipe result</button>
      </Link>

      <AppBar position="static" sx={{ backgroundColor: "secondary.main" }}>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SvgIcon fontSize="large" sx={{ color: "secondary.text" }}>
                <path
                  d="M15.5,5.5C15.5,4.67,16.17,4,17,4C17.83,4,18.5,4.67,18.5,5.5V8h1V5.5C19.5,3.57,17.93,2,16,2
        c-1.93,0-3.5,1.57-3.5,3.5V8h1V5.5z M12,5.5C12,3.57,10.43,2,8.5,2C6.57,2,5,3.57,5,5.5V8h1V5.5C6,4.67,6.67,4,7.5,4
        C8.33,4,9,4.67,9,5.5V8h3V5.5z M15.74,8L14,9.74V10h-4v-0.26L8.26,8H15.74z M3.37,9l-1.74,1.74L3.37,12H1v2h2v2h2v-2h6v2h2v-2h2v-2
        h-2.37l1.74-1.74L18.63,9H3.37z M11,16h-1v1H9v-1H8v-1h1v-1h1v1h1V16z"
                />
              </SvgIcon>
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "secondary.text" }}
          >
            Chef Compass
          </Typography>
          {auth && (
            <div>
              <IconButton
                sx={{ color: "secondary.text" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                // color="secondary.text"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                sx={{ color: "secondart.text" }}
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
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
