import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Box
  display="flex"
  alignItems="center"
  justifyContent="around"
  height={70}
  color="midnight"
  padding={1}
  shape="roundedBottom"
  >
    { /* Signin Link */ }
    <NavLink to="/signin">
      <Text size="x1" color="white" >Signin</Text>
    </NavLink>

    { /* Title and Logo */ }
    <NavLink to="/">
      <Box display="flex" alignItems="center">
        <Box height={50} width={50} margin="2">
          <Image 
            alt="Sop logo"
            naturalHeight={1}
            naturalWidth={1}
            src="../icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          Raigyo shop
        </Heading>
      </Box>
    </NavLink>

    { /* Signup In Link */ }
    <NavLink to="/signup">
      <Text size="x1" color="white" >Signup</Text>
    </NavLink>

  </Box>
)

export default Navbar;