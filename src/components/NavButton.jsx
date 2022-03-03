import React from "react";
import BaseComponent from "./BaseComponent";

class NavButton extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      style: props.buttonStyle
    };
  }

  render() {
    const _style = "btn btn-".concat(this.get("style"));
    return (
      <button
        type={this.props.buttonType}
        className={_style}
        onClick={this.props.onClick}
        style={{
          marginBottom: "1%",
          float: this.props.float
        }}
      >
        {this.props.leftIcon}
        {this.props.buttonText}
        {this.props.rightIcon}
      </button>
    );
  }
}
export default NavButton;
