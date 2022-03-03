import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BaseComponent from "../../../components/BaseComponent";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { NavLink } from "reactstrap";
export default class NavigationBar extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }

  getSingleMenu(menu, divider, dropdon) {
    if (!menu.restricted) {
      return (
        <NavLink
          tag={RRNavLink}
          key={menu.id}
          exact
          to={menu.disabled ? "#" : menu.url}
        >
          {" "}
          {menu.title}
        </NavLink>
      );
    } else return null;
  }

  getDropdownMenu(menu) {
    if (!menu.restricted) {
      let options = [];

      if (menu.options) {
        options = Object.keys(menu.options).map((e, i) => {
          return this.getSingleMenu(
            {
              ...menu.options[e],
              disabled: menu.disabled || menu.options[e].disabled,
            },
            i != 0,
            true
          );
        });
      }

      return (
        <NavDropdown title={menu.title} key={menu.id} id="basic-nav-dropdown">
          {options}
        </NavDropdown>
      );
    } else return null;
  }

  getMenu(menu) {
    if (menu.dropdown) {
      return this.getDropdownMenu(menu);
    } else {
      return this.getSingleMenu(menu, false);
    }
  }

  getLeftNav() {
    let leftNav = [];
    if (this.get("navbar")) {
      leftNav = Object.keys(this.get("navbar").left_nav).map((e, i) => {
        return this.getMenu(this.get("navbar").left_nav[e]);
      });
    }

    return <Fragment>{leftNav}</Fragment>;
  }

  getRightNav() {
    let rightNav = [];

    if (this.get("navbar")) {
      rightNav = Object.keys(this.get("navbar").right_nav).map((e, i) => {
        return this.getMenu(this.get("navbar").right_nav[e]);
      });
    }

    return <Fragment>{rightNav}</Fragment>;
  }

  render() {
    let leftNav = this.getLeftNav();
    let rightNav = this.getRightNav();

    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        {this.get("brand") ?<Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>:""}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {leftNav}
            {rightNav}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavigationBar.propTypes = {
  navbar: PropTypes.object,
};

NavigationBar.defaultProps = {};
