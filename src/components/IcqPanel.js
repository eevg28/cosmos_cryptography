
import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, notification, Spin
} from 'antd';

import { putServiceIcq, icqService } from "./../shared/services/requestService"

import 'antd/dist/antd.css';
import styles from './icqPanel.module.scss'
import { render } from '@testing-library/react';

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};
const { TextArea } = Input;

class IcqPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icqvalue: "",
      getData: false,
    }
  }

  componentWillMount() {
    icqService.request()
      .then((result) => {
        this.setState({
          icqvalue: result.data.value,
          getData: true,
        })
      })
      .catch((error) => {
        this.setState({
          getData: true,
        })
        openNotificationWithIcon('error', 'Error', 'Some thing wrong, no data...')
      })
  }

  onFinish(values) {
    let value = values.icqvalue

    this.setState({
      getData: false,
    })
    putServiceIcq.request({ value })
      .then((result) => {
        this.setState({
          icqvalue: value,
          getData: true,
        })
        openNotificationWithIcon('success', 'Update', 'ICQ is updated')
      })
      .catch((error) => {
        this.setState({
          icqvalue: value,
          getData: true,
        })
        openNotificationWithIcon('error', 'Error', 'Some thing wrong...')
      })
  };

  onFinishFailed(errorInfo) {
    openNotificationWithIcon('error', 'Error', 'Some thing wrong...')
  };

  render() {
    const { icqvalue, getData } = this.state
    
    return getData ? <div className={styles.wrapper}>
      <Form
        layout="vertical"
        name="icq"
        onFinish={this.onFinish.bind(this)}
        onFinishFailed={this.onFinishFailed.bind(this)}
        initialValues={{
          icqvalue: icqvalue,
        }}
      >
        <Form.Item
          label="Icq"
          name="icqvalue"        
        >
          <TextArea row="4"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
        </Button>
        </Form.Item>
      </Form>
    </div>
      : <Spin />
  }
}

export default IcqPanel;