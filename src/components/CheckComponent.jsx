import React from "react";
import PropTypes from "prop-types";
import FieldComponent from "./FieldComponent";
import { Input, Label, FormText, FormFeedback } from "reactstrap";

export default class CheckComponent extends FieldComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.state.value = event.target.checked ? event.target.value : "";
    this.validateField();
  }

  render() {
    if (this.get("restricted")) {
      return null;
    }
    return (
      <Label check>
        <Input
          name={this.get("name")}
          id={this.get("id")}
          type={this.get("type")}
          disabled={this.get("disabled")}
          value={this.get("value")}
          defaultChecked={
            this.get("checked") ||
            this.get("value") === this.get("default_value")
          }
          required={this.get("required")}
          onChange={this.handleChange}
          invalid={this.get("error") && this.get("error").type === "invalid"}
          valid={this.get("error") && this.get("error").type === "valid"}
        />
        {this.get("title")}
        <FormText className={this.get("info") ? "show" : "hide"}>
          {this.get("info")}
        </FormText>
        <FormFeedback
          {...{
            valid: this.get("error") && this.get("error").type === "valid"
          }}
        >
          {this.get("error") ? this.get("error").text : ""}
        </FormFeedback>
      </Label>
    );
  }
}

CheckComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  default_value: PropTypes.any,
  required: PropTypes.bool
}

CheckComponent.defaultProps = {
};
