import React from "react";
// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import CardComponent from "../../components/CardComponent"
import styles from "../../assets/jss/material-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function StaticTopPanel() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <CardComponent
                        id="welcome"
                        name="welcome"
                        headerColor="success"
                        title="Welcome  MC"
                        footerText="welcome">
                        <p>Dear User</p>
                        <p>Today is {new Date().toLocaleDateString()}</p>
                    </CardComponent>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <CardComponent
                        id="messages"
                        name="messages"
                        headerColor="info"
                        title="Messages from System Administrator"
                        footerText="messages">
                        <p>There are no messages</p>
                    </CardComponent>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <CardComponent
                        id="actions"
                        name="actions"
                        headerColor="success"
                        title="What would you like to do next?"
                        footerText="actions">
                        <p>Inquire Contractor Profile</p>
                    </CardComponent>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                    <CardComponent
                        id="help"
                        name="help"
                        headerColor="warning"
                        title="Help"
                        footerText="help">
                        <p>MC Help</p>
                    </CardComponent>
                </GridItem>
            </GridContainer>
        </div>
    );
}
