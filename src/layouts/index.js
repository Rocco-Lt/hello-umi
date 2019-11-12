import styles from './index.css';
import LeftBarPage from '../components/leftBar';
import React from 'react';
import MenuBar from '../components/menu';
import { Layout } from 'antd';
export default class BasicLayout extends React.Component {



  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>
              <MenuBar />
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
    )
  }
}

