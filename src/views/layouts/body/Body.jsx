import React from "react";
import routes from "../../route/Routes";
import { Route, Switch } from "react-router-dom";
import BaseComponent from "../../components/BaseComponent";
import PanelComponent from "../../components/PanelComponent"

export default class Body extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const panelDescription = "IFMS provides sers in the maryland Department of Transportation (MDOT) with an enchancement to FMIS (Financial Management Information Systme) that providescontract compliance functionality, specifically addresing the needs of the MBE community, including staff and management. iFMS provides an enhanced user experinece  through a wen-base user interface."
    return (
      <main className=" container-fluid hide-on-print" id="main-body">
        <div className="row">
          <div className="col-md-3">
            <PanelComponent heading="Welcome  MC" body="Dear User" className="panel-success col-md-12">
              <p>Today is {new Date().toLocaleDateString()}</p>
            </PanelComponent>
            <PanelComponent heading="Messages from System Administrator" body="There are no messages" className="panel-success col-md-12">
            </PanelComponent>
          </div>
          <div className="col-md-6">
            <PanelComponent heading="MC React Material UI" description={panelDescription} className="panel-success col-md-12">
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
              </Switch>
            </PanelComponent>
          </div>
          <div className="col-md-3">
            <PanelComponent heading="What would you like to do next?" className="panel-success col-md-12">
              <p>Inquire Contractor Profile</p>
            </PanelComponent>
            <PanelComponent heading="Help" className="panel-success col-md-12">
              <p>ifMIS Help</p>
            </PanelComponent>
          </div>

        </div>
      </main>
    );
  }
}
