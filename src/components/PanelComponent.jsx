import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";

export default class PanelComponent extends BaseComponent {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps });
    }

    render() {
        let classes = "panel " + this.get('className')
        return (
            <div className={classes}>
                <div className="panel-heading">{this.get('heading')}</div>
                <div className="panel-body">{this.get('body')}
                    {this.props.children}
                    <br />
                    <div className="panel-description">
                        {this.get('description')} 
                    </div>
                </div>
            </div>
        );
    }
}

PanelComponent.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string.isRequired
}

PanelComponent.defaultProps = {
    id: "panel",
    name: "panel"
};