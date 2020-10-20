import React from "react";
import { Container, Box, Button, Heading, Text, TextField, Modal, Spinner } from "gestalt";
import { Elements, StripeProvider, CardElement, injectStripe } from "react-stripe-elements";
import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice, clearCart, calculateAmount } from "../utils";
import { withRouter } from "react-router-dom";
import Strapi from "strapi-sdk-javascript/build/main";
//const apiUrl = process.env.API_URL || "http://localhost:1337";
const apiUrl = process.env.API_URL || "https://strapi-server-raigyobeer.herokuapp.com";
const strapi = new Strapi(apiUrl);

class _CheckoutForm extends React.Component {

  state = {
    cartItems: [],
    address: "",
    postalcode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: false,
    modal: false
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() })
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
    this.setState({ modal: true });
  }

  handleSubmitOrder = async () => {
    const { cartItems, city, address, postalcode, confirmationEmailAddress } = this.state;

    const amount = calculateAmount(cartItems);
    // Process order
    this.setState({ orderProcessing: true });
    let token;
    try {
      //create stripe token
      const response = await this.props.stripe.createToken();
      token = response.token.id;
      //create order with strapi sdk (make request to backend)
      await strapi.createEntry("orders", {
        amount,
        brews: cartItems,
        city,
        postalcode,
        address,
        token
      });
      /*await strapi.plugins['email'].services.email.send({
        to: confirmationEmailAddress,
        from: 'vincent_chilot@live.be',
        subject: `Order Confirmation - Raigyo Shop ${new Date(Date.now())} -Do not reply`,
        text: "Your order has been processed",
        html: "<bold>Expect your order to arrive in 2-3 shipping days</bold>"
      });*/
      //set order processing - false, modal - false
      this.setState({ orderProcessing: false, modal: false });
      //clear user cart of brews
      clearCart();
      //show success toast
      this.showToast("Your order has been successfully submitted!", true);
    } catch (err) {
      //set order processing - false, modal - false
      this.setState({ orderProcessing: false, modal: false });
      //show error toast
      this.showToast(err.message);
      console.log(err.message);
      //this.showToast("The card number is not valid!");
    }
  };

  isFormEmpty = ({ address, postalcode, city, confirmationEmailAddress }) => {
    return !address || !postalcode || !city || !confirmationEmailAddress;
  };

  showToast = (toastMessage, redirect = false) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(
      () =>
        this.setState(
          { toast: false, toastMessage: "" },
          // if true passed to 'redirect' argument, redirect home
          // redirect home, we have to use HOC 'withRouter' to access history
          // because checkout is not part of switch component
          () => redirect && this.props.history.push("/react-online-store")
        ),
      5000
    );
  };

  closeModal = () => this.setState({ modal: false });

  render() {

    // Destructuring props
    const { toast, toastMessage, cartItems, modal, orderProcessing } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout form heading */}
          <Heading color="midnight">Checkout</Heading>
          {/* User Cart */}
          {/* Fragments let you group a list of children without adding extra nodes
          -ex: div -  to the DOM. */}
          {/* Here we check if there is something in the cart or not */}
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalcode"
                  type="text"
                  name="postalcode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                {/* Credit card elements */}
                <CardElement id="stripe__input" onReady={input => input.focus()}
                />
                {/*<button id="stripe__button" type="submit">
                  Submit
                </button>*/}
                <Button
                  inline
                  id="stripe__button"
                  color="blue"
                  text="Submit"
                  type="submit"
                />
              </form>
            </React.Fragment>) : (
              //Default text if no items in the cart
              <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        {/* Confirmation modal */}
        {modal && (
          <ConfirmationModal
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        )}
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
      )
    }
}

// Destructuring props
const ConfirmationModal = ({orderProcessing, cartItems, closeModal, handleSubmitOrder}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm your order"
    heading="Confirm your order"
    onDismiss={closeModal}
    footer={
      <Box
        display="flex"
        marginRight={-1}
        marginLeft={-1}
        justifyContent="center"
      >
        <Box padding={1}>
          <Button
            size="lg"
            color="red"
            text="Submit"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={1}>
          <Button
            size="lg"
            text="Cancel"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>

      </Box>
    }
    role="alertdialog"
    size="sm"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding={2}
        color="lightWash"
      >
        {cartItems.map(item => (
          <Box key={item._id} padding={1}>
            <Text size="lg" color="red">
              {item.name} x {item.quantity} - ${item.quantity * item.price}
            </Text>
          </Box>
        ))}
        <Box paddingY={2}>
          <Text size="lg" bold>
            Total: {calculatePrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}

    {/* Order Processing Spinner */}
    <Spinner
      show={orderProcessing}
      accessibilityLabel="Order Processing Spinner"
    />
    {orderProcessing && (
      <Text align="center" italic>
        Submitting Order...
      </Text>
    )}
  </Modal>
);

const CheckoutForm = withRouter(injectStripe(_CheckoutForm));

const Checkout = () => (
  <StripeProvider
    apiKey="pk_test_51HD8PbKXuUXB2CzNtyeX3uWQ4bDgDHoMweFwT7vnY705d56aHB5z4edoc5amUu4NJB9zYsV78tIyJDgghBCt5K5A00WAF8rACN"
  >
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
)

export default Checkout;
