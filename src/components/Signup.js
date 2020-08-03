import React from 'react';

import { Container, Box, Heading, Text, TextField, Button } from 'gestalt';

class Signup extends React.Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value});
  }

  render() {
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
              }}>
              {/* Sign up form */}
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
                />
              </form>
          </Box>
      </Container>
    )
  }
}

export default Signup;