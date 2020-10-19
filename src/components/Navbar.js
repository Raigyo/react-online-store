import React from 'react';
import { Box, Text, Heading, Image, Button } from 'gestalt';
import { getToken, clearCart, clearToken } from "../utils"
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../img/logo.svg';

//Return a different nav bar if user is authentified or not
/*const Navbar = () => {
  return getToken() !== null ? <AuthNav /> : <UnAuthNav />;
};*/

//We use a class instead to have the ability to add functions
class Navbar extends React.Component {
handleSignout = () => {
  //clear token
  clearToken();
  //clear cart
  clearCart();
  //redirect home, we have to use HOC 'withRouter' to access history
  //because navbar is not part of switch component
  this.props.history.push('/');
}

  render(){
    return getToken() !== null ?
    <AuthNav handleSignout={this.handleSignout}/> : <UnAuthNav />;
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
  display="flex"
  alignItems="center"
  justifyContent="around"
  height={70}
  color="midnight"
  padding={1}
  shape="roundedBottom"
  >
    { /* Checkout Link */ }
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white" >Checkout</Text>
    </NavLink>

    { /* Title and Logo */ }
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box height={50} width={50} margin={2}>
          <Image
            alt="Sop logo"
            naturalHeight={1}
            naturalWidth={1}
            src={logo}
          />
        </Box>
        {/* Title */}
        <div className="main-title">
          <Heading size="xs" color="orange">
            Raigyo shop
          </Heading>
        </div>
      </Box>
    </NavLink>

    { /* Signout Button */ }
    <Button
      onClick={handleSignout}
      color="transparent"
      text="Sign Out"
      inline
      size="md"
    />

  </Box>
)


const UnAuthNav = () => (
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
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white" >Signin</Text>
    </NavLink>

    { /* Title and Logo */ }
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box height={50} width={50} margin={2}>
          <Image
            alt="Sop logo"
            naturalHeight={1}
            naturalWidth={1}
            src={logo}
          />
        </Box>
        <Heading size="xs" color="orange">
          Raigyo shop
        </Heading>
      </Box>
    </NavLink>

    { /* Signup In Link */ }
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white" >Signup</Text>
    </NavLink>

  </Box>
)

export default withRouter (Navbar);