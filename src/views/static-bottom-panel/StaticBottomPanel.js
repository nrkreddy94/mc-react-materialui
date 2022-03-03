import React from "react";
// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import Card from "../../material-ui-components/Card/Card.js"
import CardBody from "../../material-ui-components/Card/CardBody.js";

import styles from "../../assets/jss/material-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function StaticBottomPanel() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardBody>
                        <p>The React UI library you always wanted
MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your design system and develop React applications faster.</p>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
