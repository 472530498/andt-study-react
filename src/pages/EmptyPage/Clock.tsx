import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
// import styles from './index.less';
const styles = require('./index.less');
import List from './List';

export default class index extends React.Component {
  constructor(props) {
    super(props);
    // 不要在这里调用 this.setState()
    // this.state = { loading: true };
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    loading: true,
    content: '儿子??在吗',
  };

  componentDidMount() {
    // console.log(this.state['loading']);
    console.log('组件挂载');
    // setTimeout(() => {
    //   this.setState((state) => ({
    //     loading: false,
    //   }));
    // }, 3000);
  }

  componentWillUnmount() {
    console.log('组件卸载');
  }

  componentDidUpdate() {
    console.log('props 或 state 发生变化');
  }

  handleClick() {
    this.setState((state) => ({
      loading: !this.state.loading,
    }));
  }

  render() {
    return (
      <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
        {/* <div style={{ paddingTop: 100, textAlign: 'center' }}>
          <Spin spinning={this.state.loading} size="large" />
        </div>
        <Button type="primary" onClick={this.handleClick}>
          Primary Button
        </Button> */}
        <button
          onClick={() => {
            this.setState({
              content: '在的在的',
            });
          }}
        >
          收到
        </button>
        <List
          aa={this.state.content}
          callback={(e) => {
            console.log(e);
          }}
        ></List>
      </PageHeaderWrapper>
    );
  }
}
