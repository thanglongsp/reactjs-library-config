import React, {Component} from "react";
import connect from "react-redux/es/connect/connect";
import {test} from "../reduxs/actions/Action";
class MainPage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { age, name } = state.Reducer1;
    return { age, name }
}

const mapDispatchToProps = (dispatch) => ({
    test: dispatch(test())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
