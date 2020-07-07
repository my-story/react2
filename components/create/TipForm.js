import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input } from 'antd';


class TipForm extends Component {
    state = {
        tip: {},
        created: false
    }

    onChange = (e) => {
        const { tip } = this.state;
        tip[e.target.name] = e.target.value
        this.setState( {tip} )
    };

    addTip = () => {
        const {tip} = this.state;
        KitServices.createSurvivalTip(tip)
            .then(() => this.setState({created: true}))
            .catch((error) => console.log(error))
    }

    render(){
        return(
            <div>
                <Input name="influencer" type="text" placeholder="Add influencer id" onChange={this.onChange} />
                <Input name="header" type="text" placeholder="Add tip header" onChange={this.onChange} />
                <Input name="description" type="text" placeholder="Add tip description" onChange={this.onChange} />
                <button onClick={this.addTip}> Add tips </button> 
            </div>
        )
    }
}

export default TipForm;