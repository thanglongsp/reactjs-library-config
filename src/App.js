import React from 'react';
import 'antd/dist/antd.css';
import {Routes} from "./routes/Routers";
import { Provider } from "react-redux";
import {store} from "./reduxs/stores/Store";
import MainPage from "./layouts/MainPage";
import { createBrowserHistory } from 'history';

class App extends React.Component {

    render() {
        return (
            <Provider store={store} history={ createBrowserHistory }>
                <MainPage>
                    <Routes/>
                </MainPage>
            </Provider>
        );
    }
}

export default App
