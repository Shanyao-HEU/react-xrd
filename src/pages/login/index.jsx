import React, {Component} from "react"
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import logo from './assets/2.jpg'
import './login.less'
import {reqLogin} from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {Redirect} from "react-router-dom";


export default class Login extends Component {

  formRef = React.createRef()

  onFinish = async (values) => {
    console.log('Received values of form', values)
    const {username, password} = values
    const result = await reqLogin(username, password)

    if (result.status === 0) {
      message.success('登录成功！')
      const user = result.data
      storageUtils.saveUser(user)
      memoryUtils.user = result.data
      this.props.history.replace('/')
    } else {
      message.error(result.msg)
    }
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }

  render() {
    if (memoryUtils.user && memoryUtils.user._id) {
      return <Redirect to='/' />
    }
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>XRD测试后台管理系统</h1>
        </header>

        <section className='login-content'>
          <h3>用户登录</h3>
          <Form
            ref={this.formRef}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            {/*<Form.Item>*/}
            {/*  <Form.Item name="remember" valuePropName="checked" noStyle>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*  </Form.Item>*/}

            {/*  <a className="login-form-forgot" href="">*/}
            {/*    Forgot password*/}
            {/*  </a>*/}
            {/*</Form.Item>*/}

            <Form.Item>
              <Button type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      size="large">
                登录
              </Button>

              <Button type="primary" htmlType="button"
                      className="login-ca-button"
                      onClick={this.onReset}
                      size="large">
                CA登录
              </Button>
              <Button type="primary" htmlType="button"
                      className="login-reset-button"
                      onClick={this.onReset}
                      size="large">
                重置
              </Button>
            </Form.Item>
          </Form>
        </section>
        <footer className='login-footer'>
          <h3>copyright©2021 Mxthl</h3>
        </footer>
      </div>
    )
  }
}