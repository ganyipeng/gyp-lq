import React from 'react'
import {Switch, Card, Button} from 'antd'

class StudySwitch extends React.Component {
    onChange = (check)=>{
        console.log('check value is ', check)
    }

    state = {
        disabled: false
    }

    toggle = ()=>{
        this.setState(
            {
                disabled : !this.state.disabled
            }
        )
    }

    render(){
        return (
            <div>
                <Card title="basic">
                    <Switch onChange={this.onChange}
                    ></Switch>
                </Card>

                <Card title="disabled">
                    <Switch disabled={this.state.disabled}></Switch>
                    <br/>
                    <Button type="primary" onClick={this.toggle}>Toggle Disabled</Button>
                </Card>

                <Card title="size">
                    <Switch></Switch>
                    <Switch size="small"></Switch>
                </Card>

                <Card title="loading">
                    <Switch loading defaultChecked></Switch>
                    <Switch size="small" loading></Switch>
                </Card>
            </div>
        );
    }
}

export default StudySwitch;