import React, {Component} from "react";
import { getScreenHeight, getScreenWidth } from "../configs/constans/ScreenSize";

export class MainPage extends Component {
    render() {
        return(
            <div>
                { this.props.children }
                <div>
                    <p style={{ width: getScreenWidth(0.5), background: "red"}}>ccc</p>
                </div>
            </div>
        );
    }
}
