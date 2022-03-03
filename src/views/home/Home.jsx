
import React from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
import Card from "../../material-ui-components/Card/Card.js"
import CardHeader from "../../material-ui-components/Card/CardHeader.js";
import CardBody from "../../material-ui-components/Card/CardBody.js";
//import StaticTopPanel from "../static-top-panel/StaticTopPanel.js"
import StaticSidePanel from "../static-side-panel/StaticSidePanel.js"
import StaticBottomPanel from "../static-bottom-panel/StaticBottomPanel.js"
import styles from "../../assets/jss/material-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    
      <GridContainer>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>MC React Material UI</h4>
            </CardHeader>
            <CardBody>
              <h6>Home Page Content </h6>
              <StaticBottomPanel />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
           <StaticSidePanel />
        </GridItem>        
      </GridContainer>

    
  );
}
