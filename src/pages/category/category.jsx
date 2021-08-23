import React from "react";
import { Link } from "react-router-dom";
// import { observer, inject } from "mobx-react";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Modal, message, version } from "antd";
import { routeArr } from './demo.jsx'  //引入导航
const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

export default class Category extends React.Component {

  state = {
    breadcrumb: [],
    openKeys: []
  }

  componentDidMount() {
    // // 页面全局如果刷新的菜单选择状态，在此使用了sessionStorage，自定义方法
    // // this.setState({
    // //   navigation: {
    // //     name: storage.get("name"),
    // //     path: storage.get("path")
    // //   }
    // });
    console.log('props', this.props)
    this.writeBreadcrumb(this.props)
    console.log('props', this.props)//调用写的面包屑方法
  }
//页面的地址更新后调用写面包屑的方法
  componentWillReceiveProps(props) {
    this.writeBreadcrumb(props)
  }
  // 面包屑导航
  writeBreadcrumb(props) {
    let pathname = props.location.pathname
    let arr = []
    let menu = []
    //遍历一级导航
    arr.forEach(item => {
      //遍历二级导航
      item.children.forEach(it => {
        if (it.path === pathname) {
          arr.push({
            path: undefined,
            name: item.name,
            key: item.key
          })
          arr.push({
            path: it.path,
            name: it.name
          })
        }
      });
    })
//遍历完后赋值
    this.setState({
      breadcrumbArr: arr ? arr : []
    }, ev => {
      //react的setState事件的第二个参数可以直接拿到值，因为是异步，只有第一个参数，在下面使用时值不能及时改变，所以加上这个可以在确定修改完值以后操作，openKeys是数组，注意传值
      this.setState({
        openKeys: arr.length > 1 ?
          [arr[0]['key']] : []
      })
    })
  }
  render() {
    console.log("state", this.state)
    const { breadcrumbArr } = this.state
    return (
      <Layout id="layout" className="animated fadeIn" style={{ minHeight: '100vh' }}>
        <Sider className="left" trigger={null} collapsible collapsed={this.state.collapsed}>

          <Menu mode="inline"
                selectedKeys={
                  breadcrumbArr.length ? [breadcrumbArr[breadcrumbArr.length - 1]['name']] :
                    ['首页']
                }
                openKeys={
                  this.state.openKeys
                }
                onOpenChange={keyarr => this.onOpenChange(keyarr)}
          >
            <Menu.Item key="首页">
              <Link to="/index">
                <Icon type="home" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                                <span>第一个下拉</span>
                            </span>
              }>
              <Menu.Item key="管理1">
                <Link to="/no1">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理1
                </Link>
              </Menu.Item>
              <Menu.Item key="管理2">
                <Link to="/no2">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理2
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                                <span>第二个下拉</span>
                            </span>
              }>
              <Menu.Item key="管理3">
                <Link to="/no3">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理3
                </Link>
              </Menu.Item>
              <Menu.Item key="管理4">
                <Link to="/no4">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理4
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                                <span>第三个下拉</span>
                            </span>
              }>
              <Menu.Item key="管理5">
                <Link to="/no5">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理5
                </Link>
              </Menu.Item>
              <Menu.Item key="管理6">
                <Link to="/no6">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理6
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                                <span>第四个下拉</span>
                            </span>
              }>
              <Menu.Item key="管理7">
                <Link to="/no7">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理7
                </Link>
              </Menu.Item>
              <Menu.Item key="管理8">
                <Link to="/no8">
                  <i className="fa fa-align-center" />
                  &nbsp;&nbsp;管理8
                </Link>
              </Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout className="right">
          <Header className="header">
            {/* 下面可用的面包屑 */}
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="#/layout/dashboard">首页</a>
              </Breadcrumb.Item>
              {
                this.state.breadcrumbArr && this.state.breadcrumbArr.map((item, key) => (
                  <Breadcrumb.Item key={key}>
                    {
                      item.path ? <Link to={item.path ? item.path : '/'} >{item.name}</Link> :
                        <a>{item.name}</a>
                    }
                  </Breadcrumb.Item>
                ))
              }
            </Breadcrumb>
          </Header>
          <div>
            <h1>这是content内容</h1>
          </div>
          <Footer className="footer">
            <span className="banben">V-1.0</span>
          </Footer>
        </Layout>
      </Layout>)
  }
}

