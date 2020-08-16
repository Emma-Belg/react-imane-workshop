import React from "react";
import { Route, Switch} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";

const Routes = () => (
    <Switch>
        {/* Look into "exact" */}
        {/* Route needs to be a self closing tag */}
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/profile/:name'} component={Profile} />
    </Switch>
);

export default Routes;