import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Login} from "../pages/longin/Login";
import _Header from "../layouts/_Header";
import _Footer from "../layouts/_Footer";
import {_Menu} from "../layouts/_Menu";

export class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/authen">
                    </Route>
                    <Route exact path="/home">
                        <_Header/>
                        <_Menu/>
                        <_Footer/>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
