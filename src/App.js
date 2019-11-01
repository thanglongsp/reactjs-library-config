import React from 'react';
import 'antd/dist/antd.css';
import {Routes} from "./routes/Routers";
import { Provider } from "react-redux";
import {store} from "./reduxs/stores/Store";
import { createBrowserHistory } from 'history';
import {MainPage} from "./layouts/mainpage/MainPage";

class App extends React.Component {

    render() {
        return (
            <Provider store={store} history={ createBrowserHistory }>
                {/*<MainPage>*/}
                    <Routes/>
                {/*</MainPage>*/}
            </Provider>
        );
    }
}

export default App
