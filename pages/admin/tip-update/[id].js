import React, { Component } from 'react';
import { Input } from 'antd';
import Router from 'next/router';
import UserContext from '../../../components/contexts/UserContext';
import KitServices from '../../../services/KitServices';


class TipUpdate extends Component {
    state = {
        tip: "",
        updateTip: false
    }

    static contextType = UserContext;

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    componentDidMount() {
        KitServices.getTipEdit(this.props.id)
            .then((tip) => this.setState({tip}))
            .catch((error) => console.log(error))
    }

    onChange = (e) => {
        const { tip } = this.state;
        tip[e.target.name] = e.target.value
        this.setState( {tip} )
    };


    updateTip = () => {
        const {tip} = this.state;
        KitServices.editTipKit(tip._id, tip)
            .then(() => this.setState({updateTip: true}))
            .catch((error) => console.log(error))
    }

    render(){
        const {tip, updateTip} = this.state;
        console.log(tip)

      if (tip === ""){
        return(<div>Loading...</div>)
      } else {
        if (this.context.user.role === "Admin" && updateTip === false) {
        return(
            <div>
                <Input name="influencer" defaultValue={tip.influencer} type="text" placeholder="Add influencer id" onChange={this.onChange} />
                <Input name="header" defaultValue={tip.header} type="text" placeholder="Add tip header" onChange={this.onChange} />
                <Input name="description" defaultValue={tip.description} type="text" placeholder="Add tip description" onChange={this.onChange} />
                <button onClick={this.updateTip}> Add tips </button> 
            </div>
        )
        } else {
            Router.push('/admin/influencer-chart');
            return null;
        }
        }
}
}

export default TipUpdate;