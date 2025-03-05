import { NavLink } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { AppBar, Box, Toolbar, Menu, MenuItem, Container } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Wrapper from "../../assets/wrappers/Header";
import logo from "../../assets/icons/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contacts", label: "Contacts" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleMenuToggle = useCallback((event) => {
    setAnchorElNav(event?.currentTarget || null);
  }, []);

  const renderNavLink = useCallback(
    ({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          isActive ? "project project-active" : "project"
        }
      >
        {label}
      </NavLink>
    ),
    []
  );

  return (
    <>
      <Wrapper>
        <AppBar position="relative" className="app-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo */}
              <NavLink to="/">
                <img src={logo} alt="logo" className="logo" />
              </NavLink>

              {/* Mobile Menu */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <MenuRoundedIcon
                  onClick={handleMenuToggle}
                  sx={{ width: "50px", height: "50px", cursor: "pointer" }}
                />

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },
                    "& .MuiPaper-root": {
                      background: "white !important",
                      border: "1px solid white",
                    },
                  }}
                >
                  {navLinks.map((link) => (
                    <MenuItem key={link.to} onClick={handleCloseNavMenu}>
                      {renderNavLink(link)}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Desktop Navigation */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
                className="navlink-container"
              >
                {navLinks.map(renderNavLink)}
              </Box>

              {/* "Hire Me" Link */}
              <Box
                sx={{
                  marginLeft: "auto", // Push to the right
                  display: { xs: "none", md: "block" }, // Hide on mobile
                }}
              >
                <NavLink to="/hireMe" className="button">
                  Hire Me
                </NavLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Wrapper>
    </>
  );
};

export default React.memo(Header);
