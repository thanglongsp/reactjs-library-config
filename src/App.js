import React from 'react';
import 'antd/dist/antd.css';
import {Routes} from "./routes/Routers";
import {MainPage} from "./layouts/MainPage";

class App extends React.Component {

    render() {
        return (
            <MainPage>
                <Routes/>
            </MainPage>
        );
    }
}

export default App
