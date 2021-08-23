import React, { useState } from 'react';
import {Button, Modal, Form, Input, Radio, message} from 'antd';
import {reqAddRole} from "../../api";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {span: 5},
    wrapperCol: {span: 16}
  }

  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
        .validateFields()
        .then((values) => {
          form.resetFields();
          onCreate(values);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="角色名称"
          {...formItemLayout}
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input type="text" placeholder="请输入角色名称"/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false)
  console.log('collection', this)

  const onCreate = async (values) => {

    setVisible(false);

    const {roleName} = values
    const result = await reqAddRole(roleName)
    console.log('result', result)
    if (result.status === 0) {
      message.success('添加角色成功')
      const role = result.data

    } else {
      message.success('添加角色失败')
    }

  }

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        创建角色
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}

export default CollectionsPage