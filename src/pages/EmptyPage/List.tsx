import { List, Typography, Divider, Button, Skeleton, Avatar } from 'antd';
import React from 'react';
import { Link } from 'umi';
// import ReactDOM from 'react-dom';
interface propType {
  aa: string;
  callback: Function;
}
interface stateType {
  initLoading: boolean;
  loading: boolean;
  data: Array<Object>;
  list: Array<Object>;
}
export default class HH extends React.Component<propType, stateType> {
  constructor(props) {
    super(props);
    this.state = {
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    };
    console.log(props);
    console.log(this.state);
  }
  // props = {
  //   aa: '',
  // };
  // state = {
  //   initLoading: true,
  //   loading: false,
  //   data: [],
  //   list: [],
  // };

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  onLoadMore = () => {
    const data = this.state.data.concat(['列表5', '列表6', '列表7', '列表8']);
    this.setState(
      {
        data,
        list: data,
        loading: false,
      },
      () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      },
    );
  };

  getData = (callback) => {
    callback({ results: ['列表1', '列表2', '列表3', '列表4'] });
  };
  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;
    return (
      <div>
        <h1>{this.props.aa}</h1>
        <button
          onClick={() => {
            this.props.callback('爸爸,爸爸,你好,收到吗???');
          }}
        >
          跟爸爸打个招呼
        </button>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link key="list-loadmore-edit" to="/emptypage/sub-page1?sort=name">
                  edit
                </Link>,
                <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

// ReactDOM.render(<HH />, document.getElementById('root'));
