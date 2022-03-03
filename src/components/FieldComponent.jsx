import BaseComponent from "./BaseComponent";

export default class FieldComponent extends BaseComponent {
  constructor(props) {
    super();
    this.state = {
      ...props
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pre_validate !== this.get("pre_validate") && nextProps.pre_validate) {
      this.validateField();
    }
    if (nextProps.clear_default !== this.get("clear_default") && nextProps.clear_default) {
      this.setState({ value: undefined });
    }
    if (nextProps.reset_default !== this.get("reset_default") && nextProps.reset_default) {
      this.setState({ value: nextProps.default_value });
    }
    this.setState({
      pre_validate: nextProps.pre_validate,
      clear_default: nextProps.clear_default
    });
  }

  componentDidMount() {
    if (this.get("pre_validate")) {
      this.validateField();
    }
  }

  getValue() {
    return (this.get("value") === null || this.get("value") === undefined) ? '' : this.get("value");
  }

  handleChange(event) {
    this.state.value = event.target.value;
    this.validateField();
  }

  validateField() {
    this.setState({ error: {} });
    this.get("validations").some((v, i) => {
      let c = v.condition.replace(new RegExp("_value_", 'g'), this.getValue());
      if (eval(c)) {
        this.setState({
          error: {
            text: v.message.replace(new RegExp("_value_", 'g'), this.getValue()).replace(new RegExp("_name_", 'g'), this.get('title')),
            type: v.type
          }
        });
        return true;
      }
      return false;
    });
  }
}
