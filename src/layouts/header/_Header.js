import React from "react";
import Menu from "antd/es/menu/index";
import { Layout } from 'antd/lib/index';
const { Header } = Layout;

class _Header extends React.Component {
    render() {
        return(
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}

export default _Header
