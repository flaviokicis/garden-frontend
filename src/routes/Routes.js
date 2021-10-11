import { Route, Switch } from "react-router";
import Garden from "../pages/Home";
import Login from "../pages/Login";

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact>
                <Garden/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
    );
}