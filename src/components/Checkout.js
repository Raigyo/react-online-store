import React from 'react';
import { Container, Box, Heading, TextField, Button } from 'gestalt';
import ToastMessage from './ToastMessage';

class Checkout extends React.Component {

  state = {
    address:'',
    postalCode: '',
    city: '',
    confirmationEmailAdress: '',
    toast: false,
    toastMessage: ''
  }

  //Check input values
  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value});
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
  }

  isFormEmpty = ({ adress, postalCode , city, confirmationEmailAdress }) => {
    return !adress || !postalCode || !city || !confirmationEmailAdress;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast } = this.state;

    return (
      <Container>
      <Box
        color="darkWash"
        margin={4}
        padding={4}
        shape="rounded"
        display="flex"
        justifyContent="center"
      >
        {/* Checkout form */}
        <form style={{
            display: 'inlineBlock',
            textAlign:  'center',
            maxWidth: 450
        }}
        onSubmit={this.handleConfirmOrder}
        >
          {/* Checkout form heading*/}
          <Heading color="midnight">Let's Get Started</Heading>
          {/* Shipping Address Input */}
          <TextField
            id="address"
            type="text"
            name="address"
            placeholder="Shipping address"
            onChange={this.handleChange}
          />
          {/* Postal Vode Input */}
          <TextField
            id="postalCode"
            type="number"
            name="postalCode"
            placeholder="Postal code"
            onChange={this.handleChange}
          />
          {/* City Input */}
          <TextField
            id="city"
            type="text"
            name="city"
            placeholder="City of residence"
            onChange={this.handleChange}
          />
          {/* Confirmation Email Adress Input */}
          <TextField
            id="confirmationEmailAdress"
            type="email"
            name="confirmationEmailAdress"
            placeholder="Confirmation Email Adress"
            onChange={this.handleChange}
          />
          <button id="stripe__button" type="submit">
            Submit
          </button>
        </form>
      </Box>
      <ToastMessage show={toast} message={toastMessage} />
  </Container>
    )
  }
}

export default Checkout;