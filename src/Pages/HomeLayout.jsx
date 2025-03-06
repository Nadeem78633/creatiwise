import React from "react";
import { Header,Footer } from "../Components";
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from "@mui/material";
import Wrapper from "../assets/wrappers/HomeLayout";

const HomeLayout = () => {
 
  const isLaptop = useMediaQuery("(min-width: 1025px)"); // Laptop and larger

  return (
    <Wrapper>
      <Box className="home-layout">
        <Header />
        <Box component="main" className="home-main">
          <Outlet />
        </Box>
       
        {!isLaptop && <Footer />}
      </Box>
    </Wrapper>
  );
};

export default HomeLayout;
