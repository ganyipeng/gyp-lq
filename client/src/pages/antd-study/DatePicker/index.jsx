import React from 'react'
import {DatePicker, Card} from 'antd'

const {MonthPicker, WeekPicker, RangePicker} = DatePicker

class StudyDatePicker extends React.Component {
    render(){
        return (
            <div>
                <Card>
                    <DatePicker/>
                    <MonthPicker/>
                    <WeekPicker/>
                </Card>
            </div>
        );
    }
}

export default StudyDatePicker;