import {Breadcrumb, Card, Icon} from 'antd'
import React from 'react'

class StudyBreadcrumb extends React.Component {
    render(){
        return (
            <div>
                <Card title="simple">
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Applicaton List</a></Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </Card>

                <Card title="icon">
                    <Breadcrumb>
                        <Breadcrumb.Item><Icon type="home"></Icon></Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Icon type="user"></Icon>
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                    </Breadcrumb>
                </Card>
            </div>
        );
    }
}

export default StudyBreadcrumb;