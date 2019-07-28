import React from 'react'
import { Modal, Popconfirm, List, Grid, Card, Input, Button, Row, Col, Icon, Table, Divider } from 'antd'
import { connect } from 'dva'



class Joke extends React.Component {
    state = { visible: false };

    componentDidMount() {
        this.props.dispatch({
            type: 'joke/getJokes'
        });

        console.log(this.newContentInput, this.newTitleInput)
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
                    <Icon type="delete"
                        style={{color:'red'}} 
                        // onClick={
                        //     ()=>{
                        //         this.deleteById(item.id)
                        //     }
                        // }
                    />
                </Popconfirm>
                </a>
                <Divider type="vertical" />
                <a href="javascript:;">
                    <Icon type="edit" 
                        onClick={
                            ()=>{
                                this.getById(item.id)
                            }
                        }
                    />
                </a>
              </span>
            ),
          },
          {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              this.props.joke.jokes.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a href="javascript:;">Delete</a>
                </Popconfirm>
              ) : null,
          },
      ];

    createHandler = ()=>{
        const title = this.newTitleInput.state.value;
        const content = this.newContentInput.state.value;
        this.props.dispatch({
            type: 'joke/createJoke',
            title,
            content
        })
    }

    deleteById = (id)=>{
        console.log("id:"+id)
        this.props.dispatch({
            type: 'joke/deleteJokeById',
            id
        })
    }

    getById = (id)=>{
        console.log("id:"+id)
        this.props.dispatch({
            type: 'joke/getJokeById',
            id
        })
    }

    handleOk = e => {
        console.log(e);
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

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    render() {
        return (
            <div>
                <Table dataSource={this.props.joke.jokes} bordered
                    title={()=>{
                        return ['XiaoMing\'s Jokes',
                            <a style={{float:'right'}}>
                                <Icon type="plus" onClick={this.showModal}>
                                    Open Modal
                                </Icon>
                            </a>
                            ]
                        }
                    }
                    footer={()=>['You want to know who is XiaoMing?', 
                        <Button type="link">Connect me</Button>
                    ]}
                    columns={this.columns} />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Row>
                    <Col span={12}>
                        <Input placeholder="标题" ref={ref=>this.newTitleInput=ref}/>
                        <Input placeholder="内容" ref={ref=>this.newContentInput=ref}/>
                        <Button onClick={this.createHandler}>创建</Button>
                    </Col>
                    <Col span={12}>
                        <Input placeholder="标题"/>
                        <Input placeholder="内容"/>
                        <Button>保存</Button>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

// export default connect((joke)=>{joke})(Joke)//it's not right
// export default connect(({joke})=>({joke}))(Joke)
export default connect(({ joke }) => ({ joke }))(Joke)