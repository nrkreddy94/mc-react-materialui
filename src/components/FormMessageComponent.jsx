import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";

export default class FormMessageComponent extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }

  render() {
    if (this.get('visible'))
      return (
        <div className="card_footer">
          <label className={this.get('className')}>{this.get('messageText')}</label>
        </div>
      );
    else
      return null;
  }
}

FormMessageComponent.propTypes = {
  visible: PropTypes.bool,
  messageText: PropTypes.string,
  className: PropTypes.string
}

FormMessageComponent.defaultProps = {
  id: "form_message",
  name: "form_message",
  visible: false,
  className: "text-secondary"
};
