import React from 'react'
import {Button} from 'antd'

class MyButton extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // this.props.btnName = 'newValue'//error can't assign to readonly prop
        return (
            <Button>{this.props.btnName}</Button>
        );
    }
}

class StudyPropState extends React.Component {
    state = {
        btnName: 'world',
        incNum: 1
    }
    onClick = ()=>{
        this.setState({
            btnName: 'GYP'
        })
    }
    addNum = ()=>{
        this.setState({
            incNum: this.state.incNum+1
        })
    }
    render (){
        return (
            <div>
                <Button onClick={this.onClick}>change name</Button>
                <Button onClick={this.addNum}>{this.state.incNum}</Button>
                <MyButton btnName={this.state.btnName}></MyButton>
            </div>
        );
    }
}

export default StudyPropState