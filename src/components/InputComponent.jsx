import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";
import FieldComponent from "./FieldComponent";
import { FieldTypes } from "../utils/Constants";
import TextComponent from "./TextComponent";
import CheckComponent from "./CheckComponent";

export default class InputComponent extends FieldComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    switch (this.get("type")) {
      case FieldTypes.RADIO:
        return this.getCheckField();
      case FieldTypes.CHECKBOX:
        return this.getCheckField();
      default:
        return this.getTextField();
    }
  }

  getTextField() {
    return (
      <FormGroup>
        <TextComponent {...this.state} />
      </FormGroup>
    );
  }

  getCheckField() {
    return (
      <FormGroup check>
        <CheckComponent {...this.state} />
      </FormGroup>
    );
  }
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  default_value: PropTypes.any,
  required: PropTypes.bool
}

CheckComponent.defaultProps = {
};
