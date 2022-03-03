/*import React, { Fragment } from "react";
import Header from "./views/layout/Header/Header";
import Body from "./views/layout/Body/Body";
import Footer from "./views/layout/Footer/Footer";
import BaseComponent from "./components/BaseComponent";
import { BrowserRouter as Router } from "react-router-dom";
import navbarData from "./config/navbar.json";
import "./styles/main.css";

export default class App extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };

    this.navbarSuccessHandler = this.navbarSuccessHandler.bind(this);
    this.navbarAilureHandler = this.navbarFailureHandler.bind(this);
  }

  componentWillMount() {
    if (navbarData != null && navbarData != undefined)
      this.navbarSuccessHandler(navbarData);
    else this.navbarAilureHandler(navbarData);
  }

  navbarSuccessHandler(response) {
    this.setState({ navbar: response.navbar });
  }

  navbarFailureHandler(error) {
    console.log("error: " + error);
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Header
            id="app_header"
            name="app_header"
            navbar={this.get("navbar")}
          />
          {<Body id="app_body" name="app_body" />}
        </Router>
        <Footer id="app_footer" name="app_footer" />
      </Fragment>
    );
  }
}
*/