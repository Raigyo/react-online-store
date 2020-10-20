import React, { Component } from "react";
import {
  Container,
  Box,
  Heading,
  Card,
  Image,
  Text,
  SearchField,
  Icon,
} from "gestalt";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
//const apiUrl = process.env.API_URL || "https://strapi-server-raigyobeer.herokuapp.com";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: [],
    searchTerm: "",
    loadingBrands: true,
  };

  // Retrieve the brands datas
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`,
        },
      });
      console.log(response);
      this.setState({ brands: response.data.brands, loadingBrands: false });
    } catch (err) {
      console.error(err);
      this.setState({ loadingBrands: true });
    }
  }

  // Input listener
  /*handleChange = ({value}) => {
    this.setState({ searchTerm: value });
  };*/

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value }, () => this.searchBrands());
  };

  // Filter the brands displayed according search term (in name and description)
  /*filteredBrands = ({ searchTerm, brands }) => {
    return brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }*/

  searchBrands = async () => {
    const response = await strapi.request("POST", "/graphql", {
      data: {
        query: `query {
          brands(where: {
            name_contains: "${this.state.searchTerm}"
          }) {
            _id
              name
              description
              image {
                url
              }
          }
        }`,
      },
    });
    // console.log(this.state.searchTerm, response.data.brands);
    this.setState({
      brands: response.data.brands,
      loadingBrands: false,
    });
  };

  render() {
    const { searchTerm, loadingBrands, brands } = this.state;

    return (
      <Container>
        {/* Brands Search Field */}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <SearchField
            id="searchfield"
            accessibilityLabel="Brand Search Field"
            onChange={this.handleChange}
            value={searchTerm} //state is the single state of truth
            placeholder="Search Brands"
          />
          <Box margin={3}>
            <Icon
              icon="filter"
              /* Ternary true: orange, false: gray */
              color={searchTerm ? "orange" : "gray"}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>

        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>

        {/* Brands */}
        <Box
          /* Gestalt properties for box */
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec",
            },
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {/* {this.filteredBrands(this.state).map(brand => ( */}
          {brands.map((brand) => (
            <Box paddingY={4} margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="cover"
                      alt={`${"Logo brand: "}${brand.name}`}
                      naturalHeight={1}
                      naturalWidth={1}
                      //src={`${apiUrl}${brand.image[0].url}`}
                      src={`${brand.image[0].url}`}
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
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>

        {/*Gestalt spinner*/}
        {/*<Spinner show={loadingBrands} accessibilityLabel="Loading Spinner" />*/}

        {/* GridLoader spinner */}
        <Loader show={loadingBrands} />
      </Container>
    );
  }
}

export default App;
