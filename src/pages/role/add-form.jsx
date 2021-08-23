import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input,
} from 'antd'

export default class AddForm extends Component {



  render() {


    const formItemLayout = {
      labelCol: {span: 5},
      wrapperCol: {span: 16}
    }
    return (
      <Form ref={this.props.formRef}>
        <Form.Item label="角色名称" {...formItemLayout}
          name='roleName' initialValue=''
        >
          <Input type="text" placeholder="请输入角色名称"/>
        </Form.Item>
      </Form>
    )
  }
}