import React from 'react'
import HelloWorld from '../../components/Course/HelloWorld'
import { Form, Icon, Input, Button } from 'antd';

class Demo extends React.Component {
    render(){
        // console.log('正在渲染', this.state)
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={'warning'} >
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true
                                    }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    constructor(props){
        // console.log('构造函数')
        super(props)

        this.state = {
            name: '张三'
        }
    }
    componentDidMount(){
        // console.log('挂载成功',this.state)
    }
    componentDidUpdate(){
        // console.log("更新成功",this.state)
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('Received values from form ', values)
            }
        })
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Demo);

export default WrappedHorizontalLoginForm;