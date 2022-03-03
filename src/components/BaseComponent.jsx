import { Component } from "react";
import PropTypes from "prop-types";

export default class BaseComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      ...props
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  isReadonly() {
    return this.state.disabled;
  }

  isRestricted() {
    return this.state.restricted;
  }

  getId() {
    return this.state.id;
  }

  getName() {
    return this.state.name;
  }

  /**
   * Returns first level object in the state associated with given key.
   * @param {*} key 
   */
  get(key) {
    return this.state[key];
  }
}

BaseComponent.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  restricted: PropTypes.bool
}

BaseComponent.defaultProps = {
  disabled: false,
  restricted: false
}
