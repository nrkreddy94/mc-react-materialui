import React from "react";
import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import BaseComponent from "./BaseComponent";

export default class ButtonsComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    if (this.get("restricted")) {
      return null;
    }
    let buttons = this.get("buttons").map((b, i) => {
      return <ButtonComponent key={"buttons_" + b.id} {...b} />;
    });

    return <div className="float-left text-right col-md-12">{buttons}</div>;
  }
}

ButtonsComponent.propTypes = {
  buttons: PropTypes.array.isRequired
}

ButtonsComponent.defaultProps = {
};
