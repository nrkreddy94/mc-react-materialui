import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";
import { ErrorFields } from "../utils/Constants";

export default class ErrorComponent extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="error_page col-xs-12">
        <h4 className="error_message">
          {this.get(ErrorFields.STATUS)}: {this.get(ErrorFields.MESSAGE)}
        </h4>
      </div>
    );
  }
}

ErrorComponent.propTypes = {
  status: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

ErrorComponent.defaultProps = {
  id: "error",
  name: "error"
};