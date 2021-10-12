import { Route, Switch } from "react-router";
import Garden from "../pages/Home";
import Login from "../pages/Login";
import NotFound from '../pages/NotFound/index';

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Garden}/>
            <Route path="/login" exact component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    );
}