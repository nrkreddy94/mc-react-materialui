import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import BaseComponent from "../../../components/BaseComponent";
import NavigationBar from "./NavigationBar";

export default class Header extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }

  render() {
    return (
      <header className="hide-on-print">
        <Banner />
        <NavigationBar
          id="app_nav"
          name="app_nav"
          navbar={this.get("navbar")}
        />
      </header>
    );
  }
}

Header.propTypes = {
  navbar: PropTypes.object,
};

Header.defaultProps = {};
