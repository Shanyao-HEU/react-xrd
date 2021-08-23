import React, {Component} from "react"
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd'


import logo from './logo.png'
import './left-nav.less'
import menuConfig from "../../config/menuConfig";

const SubMenu = Menu.SubMenu

class LeftNav extends Component {

  getMenuNodes = (menuList) => {

    const path = this.props.location.pathname

    return menuList.map(item => {
      if(!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {

        if(item.children.find(citem => path.indexOf(citem.key)===0)){
          this.openKey = item.key
        }

        return(
          <SubMenu
            key={item.key}
            icon={item.icon}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )

      }
    })
  }

  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuConfig)
  }

  render() {

    const selectKey = this.props.location.pathname
    const openKey = this.openKey

    return (
      <div className="left-nav">
        <Link to='/home' className='logo-link'>
          <img src={logo} alt="logo" />
          <h1>硅谷后台</h1>
        </Link>

        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[selectKey]}
          defaultOpenKeys={[openKey]}
        >
          {
            this.menuNodes
          }
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)