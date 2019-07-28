import React from 'react'
import {Calendar} from 'antd'

class StudyCalendar extends React.Component {
    onPanelChange = (v,m)=>{
        console.log(v,m)
    }
    render (){
        return (
            <div>
                <Calendar onPanelChange={this.onPanelChange}/>
            </div>
        );
    }
}

export default StudyCalendar;