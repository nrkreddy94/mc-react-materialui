import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";

export default class Loading extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }

  render() {
    if (this.state != null && this.get('loading'))
      return (
        <div id="modal-overlay" className="modal-overlay">
          <img src="../images/loading.gif" />
        </div>
      );
    else return null;
  }
}

Loading.propTypes = {
  loading: PropTypes.bool
};

Loading.defaultProps = {
  id: "loading",
  name: "loading",
  loading: false
};
