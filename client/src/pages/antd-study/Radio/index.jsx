import React from 'react'
import {Radio, Card, Button} from 'antd'
import { connect } from 'dva';

const mapStateToProps = (state)=>{
    return {
        goden: state.tomo.name
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        dispatch,
        update:()=>{
            dispatch({
                type: 'tomo/update',
                payload: {
                    name: 'update by payload'
                }
            })
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class StudyRadio extends React.Component {
    state = {
        disabled: true
    }

    toggleDisabled = ()=>{
        this.setState(
            {
                disabled: !this.state.disabled
            }
        )
    }

    render(){
        return (
            <div>
                <h1>{this.props.goden}</h1>
                <Button onClick={this.props.update}>dispatch</Button>
                StudyRadio<br/>
                <Card title="basic">
                    <Radio>Radio</Radio>
                </Card>

                <Card title="disabled">
                    <Radio disabled={this.state.disabled}
                        defaultChecked={true}
                    >Disabled</Radio>
                    <br/>
                    <Radio disabled={this.state.disabled}>
                        Disabled
                    </Radio>
                    <div style={{marginTop: 20}}>
                        <Button type="primary" onClick={this.toggleDisabled}>
                            Toggle disabled
                        </Button>
                    </div>
                </Card>

                <Card title="radioGroup">
                    <Radio.Group name="radioGroup">
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                </Card>

                <Card title="solid">
                    <Radio.Group name="cities" buttonStyle="solid">
                        <Radio.Button value="a">BeiJing</Radio.Button>
                        <Radio.Button value="b">ShangHai</Radio.Button>
                        <Radio.Button value="c">HangZhou</Radio.Button>
                        <Radio.Button value="d">ChengDu</Radio.Button>
                    </Radio.Group>
                </Card>
            </div>
        );
    }
}

export default StudyRadio;