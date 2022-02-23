import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const pages = {
    'Home': '/',
    'Contact': '/contacts',
    'About': '/about'
  };
   const location = useLocation().pathname;

  return (
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
                <Link key={page[0]} to={page[1]} >
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }} >
                    {
                      location == page[1] ? (<strong>{page[0]}</strong>) : (<>{page[0]}</>)
                    }  
                  </Button>
                </Link>
              ))}


            </Box>
             <Box sx={{ flexGrow: 0 }}>
                  <a href="https://github.com/poring931/react-paid_course-foodApp" target="_blank" rel="noopener noreferrer">
                    Repo
                  </a>
 
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Footer