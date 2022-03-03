import React, { Fragment } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core components
import GridItem from  "../../material-ui-components/Grid/GridItem.js";
import GridContainer from "../../material-ui-components/Grid/GridContainer.js";
import Table from "../../material-ui-components/Table/Table.js";
import Card from "../../material-ui-components/Card/Card.js"
import CardHeader from "../../material-ui-components/Card/CardHeader.js";
import CardBody from "../../material-ui-components/Card/CardBody.js";
import Datagrid from "../../material-ui-components/DataGrid/DataGrid"
import StaticSidePanel from "../static-side-panel/StaticSidePanel.js"
import StaticBottomPanel from "../static-bottom-panel/StaticBottomPanel.js"

import styles from "../../assets/jss/material-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);

function Reports() {
  const classes = useStyles();
  return (
    <GridContainer>
    <GridItem xs={12} sm={12} md={9}>
      <Card>
        <CardHeader color="warning">
          <h4 className={classes.cardTitleWhite}>MC React Material UI</h4>
        </CardHeader>
        <CardBody>
          <Datagrid/>
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
export default Reports;
