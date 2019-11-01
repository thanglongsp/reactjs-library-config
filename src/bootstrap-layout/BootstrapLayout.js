import React, {Component} from 'react';

export class BootstrapLayout extends Component {
    render() {
        return(
            <div className="bts-bound">
                <div className="col-12 bts-header"></div>
                <div className="row bts-main">
                    <div className="col-2 bts-sidebar"></div>
                    <div className="col-10 bts-content"></div>
                </div>
                <div className="col-12 bts-footer"></div>
            </div>
        );
    }
}
