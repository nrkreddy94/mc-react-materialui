import React from "react";
import PropTypes from "prop-types";
import BaseComponent from "./BaseComponent";
import Icon from "@material-ui/core/Icon";
import Card from "../material-ui-components/Card/Card.js"
import CardHeader from "../material-ui-components/Card/CardHeader.js";
import CardIcon from "../material-ui-components/Card/CardIcon.js";
import CardBody from "../material-ui-components/Card/CardBody.js";
import CardFooter from "../material-ui-components/Card/CardFooter.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

function CardComponent(props) {
    const classes = useStyles();

    const { id, name, headerColor, headerIconColor, headerIconText, title, category, footerIcon, footerText } = props;
    return (
        <Card id={id} id={name}>
            {headerIconText &&
                <CardHeader color={headerColor} stats icon><CardIcon color={headerIconColor}>
                    <Icon>{headerIconText}</Icon>
                </CardIcon>
                    <h6 className={classes.cardTitle}>{title}</h6>
                    <p className={classes.cardCategory}>{category}</p>
                </CardHeader>}
            {!headerIconText &&
                <CardHeader color={headerColor}>
                    <CardIcon color={headerIconColor}>
                        <Icon>{headerIconText}</Icon>
                    </CardIcon>
                    <h6 className={classes.cardTitle}>{title}</h6>
                    <p className={classes.cardCategory}>{category}</p>                    
                </CardHeader>}
            <CardBody>
                {props.children}
            </CardBody>
            <CardFooter stats>
                <div className={classes.stats}>
                    {footerIcon}
                    {footerText}
                </div>
            </CardFooter>
        </Card>


    );

}

CardComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    headerColor: PropTypes.string,
    headerIconColor: PropTypes.string,
    headerIconText: PropTypes.string,
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    footerIcon: PropTypes.string,
    footerText: PropTypes.string
}

CardComponent.defaultProps = {
    id: "card",
    name: "card"
};
export default CardComponent;