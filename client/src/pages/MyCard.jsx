import { Card, Col, Row } from 'antd';
import React from 'react'


class MyCard extends React.Component{

    render(){
        return (
            <div>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>

                <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>

                <Card style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                        Card content
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default MyCard;