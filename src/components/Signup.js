import React from 'react';
import { Container, Box, Heading, Text, TextField, Button } from 'gestalt';
import ToastMessage from './ToastMessage';
import { setToken } from "../utils";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signup extends React.Component {

  state = {
    username: '',
    email: '',
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
    const { username, email, password } = this.state;
    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
    /*console.log("submitted");*/
        // Sign up user using strapi
        try {
          this.setState({ loading: true });
          const response = await strapi.register(username, email, password);
          this.setState({ loading: false });
          setToken(response.jwt);
          this.redirectUser("/");
        } catch (err) {
          this.setState({ loading: false });
          this.showToast(err.message);
        }
  };

  //redirect user to selected path
  redirectUser = path => this.props.history.push(path);

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    // listen to states
    const { toastMessage, toast, loading } = this.state;

    return (
      <Container>
          <Box
              dangerouslySetInlineStyle={{
              __style: {
                  backgroundColor:'#ebe2da'
              }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          >
              {/* Sign up form */}
              <form style={{
                  display: 'inlineBlock',
                  textAlign:  'center',
                  maxWidth: 450
              }}
              onSubmit={this.handleSubmit}
              >
              {/* Sign up form heading*/}
                <Box
                  marginBottom={2}
                  display="flex"
                  direction="column"
                  alignItems="center"
                >
                  <Heading color="midnight">Let's Get Started</Heading>
                  <Text italic color="orchid">Sign up to order some brews!</Text>
                </Box>
                {/* Username input */}
                <TextField
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                {/* Email Adress Input */}
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Adress"
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

export default Signup;