import React from 'react'
import {Rate, Card} from 'antd'

class StudyRate extends React.Component{
    render(){
        return (
            <div>
                <Card title="basic">
                    <Rate/>
                </Card>

                <Card title="half">
                    <Rate allowHalf/>
                </Card>

                <Card title="disabled">
                    <Rate defaultValue={2} disabled/>
                </Card>

                <Card title="clear">
                    <Rate defaultValue={2} allowClear/>
                </Card>

                <Card title="character">
                    <Rate defaultValue={2} allowHalf allowClear character="甘"/>
                </Card>
            </div>
        );
    }
}

export default StudyRate;