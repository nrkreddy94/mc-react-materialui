import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";

export default class ButtonComponent extends BaseComponent {
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
    let classes = "btn btn-" + this.get("color") + " btn-" + this.get("size");
    return (
      <button
        type={this.get("type")}
        name={this.get("name")}
        id={this.get("id")}
        disabled={this.get("disabled")}
        className={classes}
        onClick={this.get("onClick")}
      >
        {this.get("title")}
      </button>
    );
  }
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func
}

ButtonComponent.defaultProps = {
  type: "button",
  color: "primary",
  size: "sm"
};
