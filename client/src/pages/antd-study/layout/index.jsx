import React from 'react'
import {Layout} from 'antd'

const {Header, Footer, Sider, Content} = Layout;

class StudyLayout extends React.Component {
    render (){
        return (
            <div>
                <Layout>
                    <Header style={{background: '#fff'}}>header</Header>
                    <Layout>
                        <Sider style={{background: '#fff'}}>left sidebar</Sider>
                        <Content>main content</Content>
                        <Sider style={{background: '#fff'}}>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default StudyLayout;