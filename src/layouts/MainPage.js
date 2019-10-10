import React, {Component} from "react";
import { getScreenHeight, getScreenWidth } from "../configs/constans/ScreenSize";
import {test} from "../configs/date-times/time-zone-vn";

export class MainPage extends Component {
    render() {
        return(
            <div>
                { this.props.children }
                <div>
                    <p style={{ width: getScreenWidth(0.5), background: "red"}}>{ test }</p>
                </div>
            </div>
        );
    }
}
