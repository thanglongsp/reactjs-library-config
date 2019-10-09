import React, {Component} from "react";

export class MainPage extends Component {
    render() {
        return(
            <div>
                { this.props.children }
                <div>
                    <p className="test">ccc</p>
                </div>
            </div>
        );
    }
}
