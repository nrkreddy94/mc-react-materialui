import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";
import { Form, Col } from "reactstrap";
import { FormField, FieldTypes } from "../utils/Constants";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import ButtonsComponent from "./ButtonsComponent";

export default class FormComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: { ...props }
    };

    this.resetDefaultCallback = this.resetDefaultCallback.bind(this);
    this.clearDefaultCallback = this.clearDefaultCallback.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ form: { ...nextProps } });
  }

  render() {
    let fields = [];
    if (this.get("form").grid) {
      let columns = this.get("form").columns ? 12 / this.get("form").columns : 12;
      fields = this.get("form").grid.map((e, i) => {
        return (
          <Col
            key={this.get('form').id + "_" + i}
            style={((columns * i) % 12 === 0) ? { 'clear': 'both' } : {}}
            md={columns}
          >
            {this.getField(e)}
          </Col>
        );
      });
    }
    if (this.get("form").buttons) {
      this.get("form").buttons.forEach(b => {
        b.onClick =
          b.type === FieldTypes.RESET
            ? this.resetCallback()
            : b.type === FieldTypes.CLEAR
              ? this.clearCallback()
              : b.type === FieldTypes.BUTTON
                ? this.buttonCallback()
                : this.submitCallback();
      });
      fields.push(
        <Col key={this.get('form').id + "_buttons"}>
          {this.getButtonsGroup(this.get("form").buttons)}
        </Col>
      );
    }
    return <Form onSubmit={e => this.formSubmitCallback(e)}>{fields}</Form>;
  }

  getField(e) {
    let f = this.get("form").fields[e];
    f.default_value = this.getDefaultValue(f.id);
    f.validations = this.getValidations(f.id);
    f.pre_validate = this.get("form").pre_validate;
    f.clear_default = this.get("form").clear_default;
    f.reset_default = this.get("form").reset_default;
    //console.log("f: " + JSON.stringify(f));
    switch (f.field) {
      case FormField.INPUT:
        return this.getInputField(f);
      case FormField.SELECT:
        return this.getSelectField(f);
      default:
        return null;
    }
  }

  getDefaultValue(id) {
    return this.get("form").data[id];
  }

  getValidations(id) {
    return this.get("form").validations[id]
      ? this.get("form").validations[id]
      : [];
  }

  getInputField(f) {
    return <InputComponent key={this.get("form").id + "_" + f.id} {...f} />;
  }

  getSelectField(f) {
    return <SelectComponent key={this.get("form").id + "_" + f.id} {...f} />;
  }

  getButtonsGroup(f) {
    return (
      <ButtonsComponent key={this.get("form").id + "_buttons"} {...{ buttons: f }} />
    );
  }

  formSubmitCallback(e) {
    e.preventDefault();
    if (this.get("form").validate_on_submit) {
      if (Object.keys(this.get("form").validations).some((f, i) => {
        let field = e.target.elements[f];
        if (field) {
          let fieldValidations = this.getValidations(f);
          if (fieldValidations) {
            return fieldValidations.some((v, i) => {
              let c = v.condition.replace(new RegExp("_value_", 'g'), e.target.elements[f].value);
              if (eval(c)) {
                return true;
              }
              return false;
            });
          }
        }
      })) {
        this.setState({
          form: {
            ...this.get("form"),
            pre_validate: true,
            clear_default: false,
            reset_default: false
          }
        });
        return false;
      }
    }

    if (this.get("form").formSubmitCallback) {
      return this.get("form").formSubmitCallback(e.target);
    } else {
      return () => {
        console.log("formSubmitCallback: not supplied...");
      };
    }
  }

  submitCallback() {
    if (this.get("form").submitCallback) {
      return this.get("form").submitCallback;
    } else {
      return () => {
        console.log("submitCallback: not supplied...");
      };
    }
  }

  buttonCallback() {
    if (this.get("form").buttonCallback) {
      return this.get("form").buttonCallback;
    } else {
      return this.submitCallback
    }
  }

  resetCallback() {
    if (this.get("form").resetCallback) {
      return this.get("form").resetCallback;
    } else {
      return this.resetDefaultCallback;
    }
  }

  resetDefaultCallback(e) {
    e.preventDefault();
    this.setState({
      form: {
        ...this.get("form"),
        clear_default: false,
        reset_default: true
      }
    });
  }

  clearCallback() {
    if (this.get("form").clearCallback) {
      return this.get("form").clearCallback;
    } else {
      return this.clearDefaultCallback;
    }
  }

  clearDefaultCallback(e) {
    e.preventDefault();
    this.setState({
      form: {
        ...this.get("form"),
        clear_default: true,
        reset_default: false
      }
    });
  }
}

FormComponent.propTypes = {
  title: PropTypes.string.isRequired,
  pre_validate: PropTypes.bool,
  validate_on_submit: PropTypes.bool,
  validate_on_submit: PropTypes.bool,
  columns: PropTypes.number,
  grid: PropTypes.arrayOf(PropTypes.string),
  fields: PropTypes.object,
  buttons: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.object,
  validations: PropTypes.object
}

FormComponent.defaultProps = {
};
