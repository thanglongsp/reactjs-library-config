import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

export class MainPage extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    showPopup = () => {
        setTimeout(() => { return <p style={{ zIndex: 1 }}>cccc</p> }, 3000);
    }

    render() {
        return (
            <Layout style={{ height: window.innerHeight }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: 'red', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            color: 'red',
                            zIndex: 1
                        }}
                    >
                        { this.showPopup() }
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

