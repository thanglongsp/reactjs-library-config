import React, {Component} from "react";
import {
    BrowserRouter as Router,
    useHistory as History,
    Switch,
    Route
} from "react-router-dom";
import {Login} from "../pages/longin/Login";
import _Header from "../layouts/header/_Header";
import _Footer from "../layouts/footer/_Footer";
import {_Menu} from "../layouts/menu/_Menu";
import {GridLayout} from "../grid-layout/GridLayout";
import {BootstrapLayout} from "../bootstrap-layout/BootstrapLayout";
import {MediaLayout} from "../media-layout/MediaLayout";
import {Page1} from "../pages/pages1/Page1";

export class Routes extends Component {
    render() {
        return(
            <Router history={ History }>
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
                    <Router exact path="/grid-layout">
                        <GridLayout />
                    </Router>
                    <Router exact path="/bootstrap-layout">
                        <BootstrapLayout />
                    </Router>
                    <Router exact path="/media-layout">
                        <MediaLayout />
                    </Router>
                    <Router exact path="/page1">
                        <Page1 />
                    </Router>
                </Switch>
            </Router>
        );
    }
}
