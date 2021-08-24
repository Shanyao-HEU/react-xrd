import React, {Component} from "react"
import { Layout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import LeftNav from "../../components/left-nav";
import Header from "../../components/header"
import Home from "../home/home"
import Product from "../product/product";
import Category from "../category/category"
import Breads from "../../components/header/breads"
import Role from "../role/role"
import User from "../user/user";
import {Route, Switch, Redirect} from "react-router-dom";

const { Footer, Sider, Content } = Layout;


export default class Admin extends Component {

  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    console.log("state", this.state)
  };

  render() {
    return (
      <div style={{height:'100%'}}>
        <Layout
          className='lay1'
          style={{height: '100%'}}>
          <Sider collapsible collapsed={this.state.collapsed}>
            <LeftNav />
          </Sider>
          <Layout>
          <span>
            <Button
              onClick={this.toggle}
              style={{float:"left",marginBottom:10,zIndex:99}}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          </span>
            <Header />
            {/*<Breads />*/}
            <Content style={{backgroundColor:'white',margin:'20px 20px 0'}}>
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/category' component={Category}/>
                <Route path='/product' component={Product}/>
                {/*<Route path='/role' component={Role}/>*/}
                <Route path='/user' component={User}/>
                <Redirect to='/home' />
              </Switch>
            </ Content>
            <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>Footer</Footer>
          </Layout>
        </Layout>
        )
        }
      </div>
    )
  }
}




