// import * as React from "react";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from 'react-scroll';
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import { SvgIcon } from "@mui/material";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// export default function NavBar() {
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1, width: "100%", margin: 0 }}>


//        <AppBar position="static" sx={{ backgroundColor: "#6B0504", boxShadow: 'none', width: "100%", margin: 0 }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
       
//            <Link to="/">
//              <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <SvgIcon fontSize="large" sx={{ color: "black" }}>
//                 <path
//                   d="M15.5,5.5C15.5,4.67,16.17,4,17,4C17.83,4,18.5,4.67,18.5,5.5V8h1V5.5C19.5,3.57,17.93,2,16,2
//         c-1.93,0-3.5,1.57-3.5,3.5V8h1V5.5z M12,5.5C12,3.57,10.43,2,8.5,2C6.57,2,5,3.57,5,5.5V8h1V5.5C6,4.67,6.67,4,7.5,4
//         C8.33,4,9,4.67,9,5.5V8h3V5.5z M15.74,8L14,9.74V10h-4v-0.26L8.26,8H15.74z M3.37,9l-1.74,1.74L3.37,12H1v2h2v2h2v-2h6v2h2v-2h2v-2
//         h-2.37l1.74-1.74L18.63,9H3.37z M11,16h-1v1H9v-1H8v-1h1v-1h1v1h1V16z"
//                 />
//               </SvgIcon>
//             </IconButton>
//           </Link>
          
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <ScrollLink to="about" smooth={true}>
//               <MenuItem sx={{fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold'}}>About</MenuItem>
//             </ScrollLink>
//             <ScrollLink to="how-to" smooth={true}>
//               <MenuItem sx={{fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold'}}>How to</MenuItem>
//             </ScrollLink>
//             <ScrollLink to="contact" smooth={true}>
//               <MenuItem sx={{fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold'}}>Contact</MenuItem>
//             </ScrollLink>
//             <Link to="/authenticate">
//               <MenuItem sx={{fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold'}}>Sign In</MenuItem>
//             </Link>
//             <Link to="/create-recipe">
//               <MenuItem sx={{fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold'}}>Mix</MenuItem>
//             </Link>
//           </Box>

            // {auth && (
            //   <div>
            //     <IconButton
            //       size="large"
            //       aria-label="account of current user"
            //       aria-controls="menu-appbar"
            //       aria-haspopup="true"
            //       onClick={handleMenu}
            //       color="inherit"
            //     >
            //       <AccountCircle sx={{color: "white", mt: -1}}/>
            //     </IconButton>
            //     <Menu
            //       id="menu-appbar"
            //       anchorEl={anchorEl}
            //       anchorOrigin={{
            //         vertical: "top",
            //         horizontal: "right",
            //       }}
            //       keepMounted
            //       transformOrigin={{
            //         vertical: "top",
            //         horizontal: "right",
            //       }}
            //       open={Boolean(anchorEl)}
            //       onClose={handleClose}
            //     >
            //       <Link to="/user-profile">
            //         <MenuItem onClick={handleClose} sx={{fontFamily: "Italiana"}}>My Account</MenuItem>
            //       </Link>
            //       <MenuItem onClick={handleClose} sx={{fontFamily: "Italiana"}}>Logout</MenuItem>
            //     </Menu>
            //   </div>
            // )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

import * as React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <Box sx={{ flexGrow: 1, width: "100%", margin: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6B0504", boxShadow: 'none', width: "100%", margin: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             <SvgIcon fontSize="large" sx={{ color: "black" }}>
               <path
                   d="M15.5,5.5C15.5,4.67,16.17,4,17,4C17.83,4,18.5,4.67,18.5,5.5V8h1V5.5C19.5,3.57,17.93,2,16,2
        c-1.93,0-3.5,1.57-3.5,3.5V8h1V5.5z M12,5.5C12,3.57,10.43,2,8.5,2C6.57,2,5,3.57,5,5.5V8h1V5.5C6,4.67,6.67,4,7.5,4
         C8.33,4,9,4.67,9,5.5V8h3V5.5z M15.74,8L14,9.74V10h-4v-0.26L8.26,8H15.74z M3.37,9l-1.74,1.74L3.37,12H1v2h2v2h2v-2h6v2h2v-2h2v-2
         h-2.37l1.74-1.74L18.63,9H3.37z M11,16h-1v1H9v-1H8v-1h1v-1h1v1h1V16z"
               />
               </SvgIcon>
            </IconButton>
          </Link>
          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ScrollLink to="about" smooth={true}>
                <MenuItem sx={{ fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold' }}>About</MenuItem>
              </ScrollLink>
              <ScrollLink to="how-to" smooth={true}>
                <MenuItem sx={{ fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold' }}>How to</MenuItem>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true}>
                <MenuItem sx={{ fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold' }}>Contact</MenuItem>
              </ScrollLink>
              <Link to="/authenticate">
                <MenuItem sx={{ fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold' }}>Sign In</MenuItem>
              </Link>
              <Link to="/create-recipe">
                <MenuItem sx={{ fontFamily: "Italiana", color: "white", fontSize: 15, fontWeight: 'bold' }}>Mix</MenuItem>
              </Link>
            </Box>
          )}

            {/* Part 2: Account button */}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ color: "white", mt: -1 }} />
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
                  <MenuItem onClick={handleClose} sx={{ fontFamily: "Italiana" }}>My Account</MenuItem>
                </Link>
                <MenuItem onClick={handleClose} sx={{ fontFamily: "Italiana" }}>Logout</MenuItem>
              </Menu>
            </div>
          )}

          {isMobile && (
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
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"right"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem ListItemButton key={"Sign In"} component={Link} to="/authenticate">
            <ListItemText primary={"Sign In"} />
          </ListItem>
          <ListItem ListItemButton key={"Mix"} component={Link} to="/create-recipe">
            <ListItemText primary={"Mix"} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

