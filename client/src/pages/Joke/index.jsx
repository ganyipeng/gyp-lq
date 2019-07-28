import React from 'react';
import {
  Modal,
  Popconfirm,
  List,
  Grid,
  Card,
  Input,
  Button,
  Row,
  Col,
  Icon,
  Table,
  Divider,
} from 'antd';
import { connect } from 'dva';
import { throwStatement } from '@babel/types';

class Joke extends React.Component {
  state = {
    visible: false,
    modalTitle: '',
    newJoke: {
      title: '',
      content: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'joke/getJokes',
    });

    console.log(this.newContentInput, this.newTitleInput);
  }

  columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">
            <Popconfirm title="Sure to delete?" onConfirm={() => this.deleteById(record.id)}>
              <Icon type="delete" style={{ color: 'red' }} />
            </Popconfirm>
          </a>
          <Divider type="vertical" />
          <a href="javascript:;">
            <Icon
              type="edit"
              onClick={() => {
                this.toUpdate(record.id);
              }}
            />
          </a>
        </span>
      ),
    },
  ];

  createHandler = () => {
    const title = this.state.newJoke.title;
    const content = this.state.newJoke.content;
    this.props.dispatch({
      type: 'joke/createJoke',
      title,
      content,
    });
  };

  deleteById = id => {
    console.log('id:' + id);
    this.props.dispatch({
      type: 'joke/deleteJokeById',
      id,
    });
  };

  getById = id => {
    console.log('id:' + id);
    this.props.dispatch({
      type: 'joke/getJokeById',
      id,
    });
  };

  handleOk = e => {
    console.log(e);
    this.createHandler();
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  toAdd = () => {
    this.clearModalData();
    this.setState({
      modalTitle: 'New Joke',
    });
    this.showModal();
  };

  toUpdate = id => {
    this.clearModalData();
    this.setState({
      modalTitle: 'Update Joke',
    });
    // get joke by id
    this.props.dispatch({
      type: 'joke/getJokeById',
      id,
    });

    console.log('ttttttttt::::' + JSON.stringify(this.props.joke));
    this.setState({
      newJoke: {
        title: this.props.joke.joke.title,
        content: this.props.joke.joke.content,
      },
    });
    this.showModal();
  };

  clearModalData = () => {
    this.setState({
      newJoke: {
        title: '',
        content: '',
      },
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    return (
      <div>
        <Table
          dataSource={this.props.joke.jokes}
          bordered
          rowKey={row => row.id}
          title={() => {
            return [
              "XiaoMing's Jokes",
              <a style={{ float: 'right' }}>
                <Icon type="plus" onClick={this.toAdd}>
                  Open Modal
                </Icon>
              </a>,
            ];
          }}
          footer={() => [
            'You want to know who is XiaoMing?',
            <Button type="link">Connect me</Button>,
          ]}
          columns={this.columns}
        />
        <Modal
          title={this.state.modalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={12}>
              <Input
                placeholder="标题"
                value={this.state.newJoke.title}
                onChange={e => {
                  this.setState({
                    newJoke: {
                      title: e.target.value,
                      content: this.state.newJoke.content,
                    },
                  });
                }}
              />
              <Input
                placeholder="内容"
                value={this.state.newJoke.content}
                onChange={e => {
                  this.setState({
                    newJoke: {
                      title: this.state.newJoke.title,
                      content: e.target.value,
                    },
                  });
                }}
              />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default connect(({ joke }) => ({ joke }))(Joke);
