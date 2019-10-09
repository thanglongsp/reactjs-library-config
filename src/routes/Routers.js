import React, {Component} from "react";
import Head from "../Head";
import Foot from "../Foot";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Head />
                    </Route>
                    <Route path="/about">
                        <Foot />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
