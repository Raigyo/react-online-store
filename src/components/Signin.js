import React from 'react';
import { Container, Box, Heading, TextField, Button } from 'gestalt';
import ToastMessage from './ToastMessage';
import { setToken } from "../utils";
import Strapi from "strapi-sdk-javascript/build/main";
//const apiUrl = process.env.API_URL || "http://localhost:1337";
const apiUrl = process.env.API_URL || "https://strapi-server-raigyobeer.herokuapp.com/";
const strapi = new Strapi(apiUrl);

class Signin extends React.Component {

  state = {
    username: '',
    password: '',
    toast: false,
    toastMessage: ''
  }

  //Check input values
  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value});
  };

  //Check form
  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
    /*console.log("submitted");*/
        // Sign in user using strapi
        try {
          this.setState({ loading: true });
          const response = await strapi.login(username, password);
          this.setState({ loading: false });
          setToken(response.jwt);
          this.redirectUser("/react-online-store");
        } catch (err) {
          this.setState({ loading: false });
          console.log(err.message);
          //this.showToast(err.message);
          this.showToast('New user, please sign up first!');
        }
  };

  //redirect user to selected path
  redirectUser = path => this.props.history.push(path);

  isFormEmpty = ({ username,  password }) => {
    return !username || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {

    // destructuring props: listen to states
    const { toastMessage, toast, loading } = this.state;

    return (
      <Container>
          <Box
              dangerouslySetInlineStyle={{
              __style: {
                  backgroundColor:'#d6a3b1'
              }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          >
              {/* Sign in form */}
              <form style={{
                  display: 'inlineBlock',
                  textAlign:  'center',
                  maxWidth: 450
              }}
              onSubmit={this.handleSubmit}
              >
              {/* Sign in form heading*/}
                <Box
                  marginBottom={2}
                  display="flex"
                  direction="column"
                  alignItems="center"
                >
                  <Heading color="midnight">Welcome back!</Heading>
                </Box>
                {/* Username input */}
                <TextField
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                  {/* Password input */}
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Button
                  inline
                  color="blue"
                  text="Submit"
                  type="submit"
                  /* Disable button when loading */
                  disabled={loading}
                />
              </form>
          </Box>
          <ToastMessage show={toast} message={toastMessage} />
      </Container>
    )
  }
}

export default Signin;