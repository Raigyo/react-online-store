import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from './utils';
import "gestalt/dist/gestalt.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Brews from "./components/Brews";

//Routes

//We create a 'private' route for authenticated users
//Users have to be logged to access the checkout route
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getToken() !== null ?
      <Component {...props} /> : <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }} />
  )} />
)

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        {/* use exact property otherwise it will always choose the route "/"*/}
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        {/* Route displayed only if logged otherwise redirected to signin */}
        <PrivateRoute component={Checkout} path="/checkout" />
        {/* Dynamic route*/}
        <Route component={Brews} path="/:brandId" />
      </Switch>
    </React.Fragment>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
