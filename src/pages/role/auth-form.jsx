import React, {Component} from "react"
import PropTypes from 'prop-types'
import {
  Form,
  Input,
  Tree
} from "antd";

import menuList from "../../config/menuConfig";

const Item = Form.Item
const {TreeNode} = Tree

export default class AuthForm extends Component {

  static propTypes = {
    role: PropTypes.object
  }

  constructor(props) {
    super(props);
    const {menus} = this.props.role
    this.state = {
      checkedKeys:menus
    }
  }

  getMenus = () => this.state.checkedKeys

  getTreeNodes = (menuList) => {
    return menuList.reduce((pre, item) => {
      pre.push(
        <TreeNode title={item.title} key={item.key}>
          {item.children ? this.getTreeNodes(item.children) : null}
        </TreeNode>
      )
      return pre
    }, [])
  }

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({checkedKeys})
  }

  componentWillMount() {
    this.treeNodes = this.getTreeNodes(menuList)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()', nextProps)
    const menus = nextProps.role.menus
    this.setState({
      checkedKeys: menus
    })
  }

  render() {
    console.log('AuthForm render()')
    const {role} = this.props
    const {checkedKeys} = this.state
// 指定 Item 布局的配置对象
    const formItemLayout = {
      labelCol: { span: 4 }, // 左侧 label 的宽度
      wrapperCol: { span: 15 }, // 右侧包裹的宽度
    }
    return (
      <div>
        <Item label='角色名称' {...formItemLayout}>
          <Input value={role.name} disabled/>
        </Item>
        <Tree
          checkable
          defaultExpandAll={true}
          checkedKeys={checkedKeys}
          onCheck={this.onCheck}
        >
          <TreeNode title="平台权限" key="all">
            {this.treeNodes}
          </TreeNode>
        </Tree>
      </div>
    )
  }
}