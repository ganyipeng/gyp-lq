import {Card, Icon} from 'antd'
import React from 'react'

class StudyIcon extends React.Component {
    render(){
        return (
            <div>
                <Card>
                    <Icon type="step-backward" />
                    <Icon type="step-backward" />
                    <Icon type="up-circle" theme="twoTone" />
                </Card>
            </div>
        );
    }
}

export default StudyIcon;