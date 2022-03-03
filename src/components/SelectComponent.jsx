import React from "react";
import PropTypes from "prop-types";
import FieldComponent from "./FieldComponent";
import { FieldTypes } from "../utils/Constants";
import SingleSelectComponent from "./SingleSelectComponent";
import MultiSelectComponent from "./MultiSelectComponent";

export default class SelectComponent extends FieldComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  render() {
    switch (this.get("type")) {
      case FieldTypes.MULTI:
        return this.getMultiSelectField();
      default:
        return this.getSingleSelectField();
    }
  }

  getMultiSelectField() {
    return <MultiSelectComponent {...this.state} />;
  }

  getSingleSelectField() {
    return <SingleSelectComponent {...this.state} />;
  }

}

SelectComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  default_value: PropTypes.any,
  required: PropTypes.bool,
  remote_data: PropTypes.bool,
  data_src: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.any,
    readonly: PropTypes.bool
  }))
}

SelectComponent.defaultProps = {
};
