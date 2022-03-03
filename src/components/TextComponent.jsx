import React from "react";
import PropTypes from "prop-types";
import FieldComponent from "./FieldComponent";
import { Input, Label, FormText, FormFeedback } from "reactstrap";

export default class TextComponent extends FieldComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      value: props.default_value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    if (this.get("restricted")) {
      return null;
    }
    return (
      <div>
        <Label for={this.getId()}>{this.get("title")}</Label>
        <Input
          type={this.get("type")}
          name={this.get("name")}
          id={this.getId()}
          value={this.getValue()}
          placeholder={this.get("placeholder")}
          disabled={this.get("disabled")}
          onChange={this.handleChange}
          invalid={this.get("error") && this.get("error").type === "invalid"}
          valid={this.get("error") && this.get("error").type === "valid"}
        />
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
      </div>
    );
  }
}

TextComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  default_value: PropTypes.any,
  required: PropTypes.bool
}

TextComponent.defaultProps = {
};
