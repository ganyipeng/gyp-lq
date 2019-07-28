import React from 'react'
import {Input, Card, Icon, Select, Button, Tooltip} from 'antd'

const {Option} = Select

const s1 = (
    <Select defaultValue="Http://">
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
)

const selectAfter = (
    <Select defaultValue=".com">
        <Option value=".com">.com</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
)

class StudyInput extends React.Component {
    render(){
        return (
            <div>
                <Card title="basic usage">
                    <Input placeholder="Basic usage"/>
                </Card>

                <Card title="size usage">
                    <Input placeholder="Large size" size="large"/>
                    <Input placeholder="Default size"/>
                    <Input placeholder="Small size" size="small"/>
                </Card>

                <Card title="addon">
                    <Input defaultValue="mysite"
                        addonAfter=".com"
                        addonBefore="Http://"
                        style={{marginBottom:'16px'}}
                    ></Input>
                    <Input 
                        defaultValue="mysite"
                        addonAfter={
                            <Icon type="setting"/>
                        }
                        style={{marginBottom:'16px'}}
                    />
                    <Input
                        addonBefore={s1}
                        addonAfter={selectAfter}
                        defaultValue="mysite"
                    />
                </Card>

                <Card title="textarea">
                    <Input.TextArea rows={4}/>
                </Card>

                <Card title="search button">
                    <Input.Search
                        style={{width:'200px'}}
                        placeholder="input search text"
                    ></Input.Search>
                </Card>

                <Card title="autosize">
                    <Input.TextArea
                        autosize
                    ></Input.TextArea>
                </Card>

                <Card title="clear">
                    <Input allowClear
                        placeholder="input with clear icon"
                        />
                </Card>

                <Card title="suffix prefix">
                    <Input 
                        prefix={
                            <Icon type="user"/>
                        }
                        suffix={
                            <Tooltip title="extra info">
                                <Icon type="info-circle"/>
                            </Tooltip>
                        }
                    />
                </Card>

                <Card title="password">
                    <Input.Password
                        placeholder="input password"
                        />
                </Card>
            </div>
        );
    }
}

export default StudyInput;