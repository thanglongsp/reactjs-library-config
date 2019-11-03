import React, {Component} from 'react';
import {Button} from "antd";

export class Page1 extends Component {

    changeClass = () => {
        document.getElementById("p1-sidebar").classList.toggle('p1-sidebar-toggled');
        document.getElementById("p1-content").classList.toggle('p1-content-toggled');
    }

    removeClass = async () => {
        document.getElementById("thanglongsp").classList.remove('p1-sidebar-toggled');
        document.getElementById("p1-content").classList.remove('p1-content-toggled');
    }

    render() {
        return (
            <div className="bound">
                <div className="p1-bound">
                    <div id="p1-sidebar" />
                    <div id="p1-content">
                        <Button onClick={this.changeClass}>Menu</Button>
                    </div>
                </div>
            </div>
        );
    }
}

