import {Button, Card, Icon, Menu, Dropdown} from 'antd'
import React from 'react'

const menu = <Menu>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
    <Menu.Item>Item 3</Menu.Item>
</Menu>

class Button5 extends React.Component {
    render(){

        return (
            <div>
                <Card title="button type">
                    <Button type="primary">primary button</Button>
                    <Button>primary button</Button>
                    <Button type="dashed">primary button</Button>
                    <Button type="link">primary button</Button>
                    <Button type="danger">primary button</Button>
                </Card>
                <Card title="button icon">
                    <Button type="primary" icon="search">search</Button>
                    <Button type="default" icon="search">search</Button>
                    <Button><Icon type="search"></Icon></Button>
                    <Button icon="search" type="primary"></Button>
                </Card>
                <Card title="button size">
                    <Button type="primary" icon="search" size="small">search</Button>
                    <Button type="primary" icon="search">search</Button>
                    <Button type="primary" icon="search" size="large">search</Button>
                </Card>
                <Card title="button ghost" style={{background:'#e8e8e8'}}>
                    <Button type="primary" ghost={true}>primary button</Button>
                    <Button ghost="true">primary button</Button>
                    <Button type="dashed" ghost="true">primary button</Button>
                    <Button type="link" ghost={true}>primary button</Button>
                    <Button type="danger" ghost="true">primary button</Button>
                </Card>
                <Card title="button disabled">
                    <Button type="primary" disabled>primary button</Button>
                    <Button disabled="true">primary button</Button>
                    <Button type="dashed" disabled={true}>primary button</Button>
                    <Button type="link" disabled>primary button</Button>
                    <Button type="danger" disabled>primary button</Button>
                </Card>
                <Card title="button loading">
                    <Button type="primary" loading>primary button</Button>
                    <Button loading="true">primary button</Button>
                    <Button type="dashed" loading={true}>primary button</Button>
                    <Button type="link" loading>primary button</Button>
                    <Button type="danger" loading>primary button</Button>
                </Card>
                <Card title="dropdown overlay">
                    <Dropdown overlay={menu}>
                        <Button>
                            operators
                            <Icon type="down"></Icon>
                        </Button>
                    </Dropdown>
                </Card>
                <Card title="button block">
                    <Button type="primary" block>primary button</Button>
                    <Button block="true">primary button</Button>
                    <Button type="dashed" block={true}>primary button</Button>
                    <Button type="link" block>primary button</Button>
                    <Button type="danger" block>primary button</Button>
                </Card>
                <Card title="button type">
                    <Button.Group>
                        <Button>L</Button>
                        <Button>M</Button>
                        <Button>R</Button>
                    </Button.Group>
                </Card>
            </div>
        );
    }
}

export default Button5;