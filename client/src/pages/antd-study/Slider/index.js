import React from 'react'
import {Card, Slider} from 'antd'

class StudySlider extends React.Component {
    render(){
        return (
            <div>
                <Card title="basic">
                    <Slider/>
                </Card>
            </div>
        );
    }
}

export default StudySlider;