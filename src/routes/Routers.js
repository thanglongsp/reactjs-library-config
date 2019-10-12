import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Login} from "../pages/longin/Login";
import _Header from "../layouts/header/_Header";
import _Footer from "../layouts/footer/_Footer";
import {_Menu} from "../layouts/menu/_Menu";

export class Routes extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/authen">
                    </Route>
                    <Route exact path="/home">
                        {/*<_Header/>*/}
                        {/*<div className="bound-main">*/}
                        {/*    <div className="bound-menu">*/}
                        {/*        <_Menu/>*/}
                        {/*    </div>*/}
                        {/*    <div className="bound-content">*/}
                        {/*        <p>thanglongsp</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<_Footer/>*/}
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
