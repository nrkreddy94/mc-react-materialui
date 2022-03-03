import React from "react";
// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

import CardComponent from "../../components/CardComponent"
import styles from "../../assets/jss/material-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function StaticSidePanel() {
    const classes = useStyles();
    return (        
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CardComponent
                        id="welcome"
                        name="welcome"
                        headerColor="success"
                        title="Welcome To MC"
                        footerText="welcome">
                        <p>Dear User</p>
                        <p>Today is {new Date().toLocaleDateString()}</p>
                    </CardComponent>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CardComponent
                        id="messages"
                        name="messages"
                        headerColor="info"
                        title="Messages from System Administrator"
                        footerText="messages">
                        <p>There are no messages</p>
                    </CardComponent>
                </GridItem>
                {/*
                 <GridItem xs={12} sm={12} md={12}>
                    <CardComponent
                        id="actions"
                        name="actions"
                        headerColor="success"
                        title="What would you like to do next?"
                        footerText="actions">
                        <p>Inquire Contractor Profile</p>
                    </CardComponent>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <CardComponent
                        id="help"
                        name="help"
                        headerColor="warning"
                        title="Help"
                        footerText="help">
                        <p>ifMIS Help</p>
                    </CardComponent>
                </GridItem> */}
               
            </GridContainer>
        
    );
}
