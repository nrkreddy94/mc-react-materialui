import React from "react";
import PropTypes from "prop-types";
import FieldComponent from "./FieldComponent";
import { FormGroup, Input, Label, FormText, FormFeedback } from "reactstrap";
import { jsonGet } from "../utils/FetchUtils";

export default class SingleSelectComponent extends FieldComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      value: props.default_value
    };

    this.handleChange = this.handleChange.bind(this);
    this.successHandler = this.successHandler.bind(this);
    this.failureHandler = this.failureHandler.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this.get("remote_data")) {
      this.setState({
        options: [{ value: "", title: "Loading options", disabled: true }]
      });
      jsonGet(this.get("data_src"), this.successHandler, this.failureHandler);
    }
  }

  successHandler(response) {
    if (this._isMounted)
      this.setState({ options: response.data });
  }

  failureHandler(error) {
    if (this._isMounted)
      this.setState({ options: [{ value: "", title: error.error_message }] });
  }

  render() {
    if (this.get("restricted")) {
      return null;
    }
    // if (this.state.options.length > 5) {
    //   return this.getSingleSelectDropdown();
    // } else {
    //   return this.getSingleSelectRadio();
    // }
    return this.getSingleSelectDropdown();
  }

  getSingleSelectDropdown() {
    let options = this.get("options").map((o, i) => {
      return (
        <option
          key={this.get("id") + "_" + o.value}
          value={o.value}
          disabled={o.disabled}
        >
          {o.title}
        </option>
      );
    });
    return (
      <FormGroup>
        <Label for={this.get("id")}>{this.get("title")}</Label>
        <Input
          type="select"
          name={this.get("name")}
          id={this.get("id")}
          value={this.getValue()}
          onChange={this.handleChange}
          disabled={this.get("disabled")}
          invalid={this.get("error") && this.get("error").type === "invalid"}
          valid={this.get("error") && this.get("error").type === "valid"}
        >
          {options}
        </Input>
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
      </FormGroup>
    );
  }

  // getSingleSelectRadio() {
  //   if (this.get("restricted")) {
  //     return null;
  //   }
  //   let options = this.get("options").map((o, i) => {
  //     return (
  //       <div key={this.get("id") + "_" + o.value}>
  //         <Input
  //           name={this.get("name")}
  //           id={this.get("id")}
  //           type={"radio"}
  //           disabled={o.disabled}
  //           value={o.value}
  //           defaultChecked={
  //             this.getValue() === o.value ||
  //             o.value === this.get("default_value")
  //           }
  //           required={this.get("required")}
  //           onChange={this.handleChange}
  //           invalid={this.get("error") && this.get("error").type === "invalid"}
  //           valid={this.get("error") && this.get("error").type === "valid"}
  //         />
  //         {o.title}
  //       </div>
  //     );
  //   });
  //   return (
  //     <div>
  //       <Label for={this.get("id")}>{this.get("title")}</Label>
  //       <FormGroup check>
  //         <Label check>
  //           {options}
  //           <FormText className={this.get("info") ? "show" : "hide"}>
  //             {this.get("info")}
  //           </FormText>
  //           <FormFeedback
  //             style={{
  //               display:
  //                 this.get("error") &&
  //                   (this.get("error").type === "valid" ||
  //                     this.get("error").type === "invalid")
  //                   ? "block"
  //                   : "none"
  //             }}
  //             {...{
  //               valid: this.get("error") && this.get("error").type === "valid"
  //             }}
  //           >
  //             {this.get("error") ? this.get("error").text : ""}
  //           </FormFeedback>
  //         </Label>
  //       </FormGroup>
  //     </div>
  //   );
  // }
}

SingleSelectComponent.propTypes = {
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

SingleSelectComponent.defaultProps = {
};
