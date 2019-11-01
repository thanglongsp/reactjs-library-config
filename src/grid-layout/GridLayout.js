import React, {Component} from 'react';

export class GridLayout extends Component {
    render() {
        return(
            <div className="grid-container-layout">
                <div className="header">Header</div>
                <div className="sidebar">Menu</div>
                <div className="main">Main</div>
                <div className="footer">Footer</div>
            </div>
        );
    }
}
