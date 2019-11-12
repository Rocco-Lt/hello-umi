import styles from './index.less';
import LeftBarPage from '../components/leftBar';
import React from 'react';
import MenuBar from '../components/menu';
import { Layout, Menu, Icon } from 'antd';
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }


  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <>
        <Layout>
          <Header></Header>
          <MenuBar></MenuBar>
        </Layout>
      </>
    )
  }
}

