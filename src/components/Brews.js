import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import { Box, Heading, Card, Image, Text, Button, Mask, IconButton  } from 'gestalt';
import { calculatePrice, setCart, getCart } from "../utils"
import { Link } from 'react-router-dom';
import Loader from "./Loader";
//const apiUrl = process.env.API_URL || "http://localhost:1337";
const apiUrl = process.env.API_URL || "https://strapi-server-raigyobeer.herokuapp.com";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {

  state = {
    brews: [],
    brand: '',
    cartItems: [],
    loadingBrands: true,
    showCart: false
  }

  // Retrieve the brews datas
  async componentDidMount() {
  // Retrieve the brew ID
  // console.log(this.props.match.params.brandId)
      try {
        const response = await strapi.request("POST", "/graphql", {
          data: {
            query: `query {
            brand(id: "${this.props.match.params.brandId}") {
              _id
              name
              brews {
                _id
                name
                description
                image {
                  url
                }
                price
              }
            }
          }`
          }
        });
        //console.log(response);
        this.setState({
          brews: response.data.brand.brews,
          brand: response.data.brand.name,
          cartItems: getCart(),
          loadingBrands: false,
          showCart: true
        });
      }
      catch (err) {
        console.error(err);
        this.setState({ loadingBrands: true });
      }
  }

  // Manage cart (add items)
  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === brew._id
    );
    //if not in the cart: add item / else item already in the cart: increase quantity
    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  }

  // Manage cart (delete items with the id passed into the function)
  // In real it only keeps the item that have not the item id to delete
  deleteItemFromCart = itemToDeleteID => {
    const filteredItems = this.state.cartItems.filter(item => item._id !== itemToDeleteID);
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems) );
  }

  render() {

    const { brand, brews, loadingBrands, showCart, cartItems } = this.state;

    return (
        <Box
          marginTop={4}
          display="flex"
          justifyContent="center"
          alignItems="start"
          dangerouslySetInlineStyle={{
            __style: {
              flexWrap: 'wrap-reverse'
            }
          }}
        >
          {/* Brews section */}
          {showCart ? (
          <Box
            display="flex"
            direction="column"
            alignItems="center"
          >
            {/* Brews heading */}
            <Box margin={2}>
              <Heading color="orchid">{brand}</Heading>

            </Box>
            {/* Brews */}
            <Box
              dangerouslySetInlineStyle={{
                __style: {
                  backgroundColor: "#bdcdd9"
                }
              }}
              wrap
              shape="rounded"
              display="flex"
              justifyContent="center"
              padding={4}
            >
              {brews.map(brew => (
                <Box paddingY={4} margin={2} width={210} key={brew._id}>
                  <Card
                    image={
                      <Box height={250} width={200}>
                        <Image
                          fit="cover"
                          alt="Brand"
                          naturalHeight={1}
                          naturalWidth={1}
                          //src={`${apiUrl}${brew.image.url}`}
                          src={`${brew.image.url}`}
                        />
                      </Box>
                    }
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      direction="column"
                    >
                      <Box marginBottom={2}>
                        <Text bold size="xl">
                          {brew.name}
                        </Text>
                      </Box>
                      <Text>{brew.description}</Text>
                      <Text color="orchid">${brew.price}</Text>
                      <Box marginTop={2}>
                        <Text bold size="xl">
                          <Button
                            onClick={() => this.addToCart(brew)}
                            color="blue"
                            text="Add to Cart"
                          />
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
          ): null}

          {/* User Cart */}
          {showCart ? (
            <Box alignSelf="end" marginTop={2} marginLeft={8}>
              <Mask shape="rounded" wash>
                <Box
                  display="flex"
                  direction="column"
                  alignItems="center"
                  padding={2}
                >
                  {/* User cart heading */}
                  <Heading align="center" size="sm">Your cart</Heading>
                  <Text color="gray" italic>
                    {cartItems.length} items selected
                  </Text>

                  {/* Cart Items / real time update quantity, price... */}
                  {cartItems.map(item => (
                    <Box key={item._id} display="flex" alignItems="center">
                      <Text>
                        {item.name} x {item.quantity} - $
                        {(item.quantity * item.price).toFixed(2)}
                      </Text>
                      <IconButton
                        accessibilityLabel="Delete Item"
                        icon="cancel"
                        size="sm"
                        iconColor="red"
                        onClick={() => this.deleteItemFromCart(item._id)}
                      />
                    </Box>
                  ))}

                  <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  >
                    <Box margin={2}>
                      {/*If zero, shows default text component */}
                      {cartItems.length === 0 && (
                        <Text>Please select some items</Text>
                      )}
                    </Box>
                    <Text size="lg">Total: {calculatePrice(cartItems)}</Text>
                    <Text>
                      <Link to="/checkout">Checkout</Link>
                    </Text>

                  </Box>
                </Box>

              </Mask>

            </Box>
          ): null}
          <Loader show={loadingBrands} />
        </Box>
    );
  }
}

export default Brews;