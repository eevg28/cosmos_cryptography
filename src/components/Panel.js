import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import {
  Layout, Menu,
  Form, Input, Button, notification
} from 'antd';
import md5 from 'md5'

import IcqPanel from "./IcqPanel"

import 'antd/dist/antd.css';
import styles from './panel.module.scss'

const user = "evg"
const key = "5683bf9b630ec16374ace6449d7fe4ec"

const Panel = (props) => {
  const [collapsed, setCollaps] = useState(window.outerWidth < 1440)
  const [isLogin, setLogin] = useState(false)
  const [openKey, setKey] = useState(0)

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const openNotificationWithIcon = (type, title, message) => {
    notification[type]({
      message: title,
      description: message,
    });
  };

  const onFinish = (values) => {
    if (values.username.toLowerCase() === user && md5(values.password.toLowerCase()) === key) {
      setLogin(true)
    } else {
      openNotificationWithIcon('error', 'Error', 'Login or pass is uncorrect')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return isLogin
    ? <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollaps.bind(this, !collapsed)}>
        <Menu theme="dark" mode="inline" defaultOpenKeys={["0"]} defaultSelectedKeys={["0"]} onSelect={(item) => { setKey(item.key) }}>
          <Menu.Item key="0">Home</Menu.Item>
          <Menu.Item key="1">ICQ</Menu.Item>
          <Menu.Item key="2">
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.site_layout_background} style={{ padding: "0 24px" }}>
            {
              openKey == 0
                ? <h1>Home page</h1>
                : null
            }
            {
              openKey == 1
              ? <h1>Icq page</h1>
                : null
            }
        </Header>
        <Content style={{ margin: '16px 16px 0px' }}>

          <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360 }}>

            {
              openKey == 0
                ? <h1>Welcome</h1>
                : null
            }
            {
              openKey == 1
                ? <IcqPanel />
                : null
            }
            {/* <Switch>
              <Route exact path="/panel/icq" component={IcqPanel} />
            </Switch> */}

          </div>

        </Content>
      </Layout>
    </Layout>
    : <div className={styles.login_wrapper}>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>

          <Button type="link" htmlType="button">
            <Link to="/">Cancel</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
}

export default Panel;