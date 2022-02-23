import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";

const Header = () => {

  const pages = {
    'Home': '/',
    'Contact': '/contacts',
    'About': '/about'
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const location = useLocation().pathname;

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
              <Link to="/"><img width="50" src="/logo.svg" alt="" /></Link>

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon  />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
     
              {Object.entries(pages).map((page) => (
                <Link key={page[0]} to={page[1]} onClick={handleCloseNavMenu} >
                    <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page[0]}</Typography>
                    </MenuItem>
                </Link>
              ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
             <Link to="/"><img width="50" src="/logo.svg" alt="" /></Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
            {Object.entries(pages).map((page) => (
              <Link key={page[0]} to={page[1]} onClick={handleCloseNavMenu} >
                <Button  sx={{ my: 2, color: 'white', display: 'block' }} >
                  {
                    location == page[1] ? (<strong>{page[0]}</strong>) : (<>{page[0]}</>)
                  }  
                </Button>
              </Link>
            ))}


            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Перейти в репозиторий">
                <IconButton  sx={{ p: 0 }}>
                  <a href="https://github.com/poring931/react-paid_course-foodApp" target="_blank" rel="noopener noreferrer">
                    Repo
                  </a>
                </IconButton>
              </Tooltip>
 
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    
    
    </>
  );
};

export default Header