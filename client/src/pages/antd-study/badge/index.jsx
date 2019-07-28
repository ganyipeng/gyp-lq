import React from 'react'
import {Badge} from 'antd'
import myclass from './index.css'

class StudyBadge extends React.Component {
    render(){
        return (
            <div>
                <Badge count={5}>
                <a href="#" style={myclass.aa} />
                </Badge>
            </div>
        );
    }
}

export default StudyBadge;