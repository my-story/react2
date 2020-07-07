import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../../../components/contexts/UserContext';
import KitServices from '../../../services/KitServices';

const { TextArea } = Input;

class SurvivalProductUpdate extends Component {
    state = {
        survivalProduct: "",
        productUpdated: false
    }

    static contextType = UserContext;

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    componentDidMount(){
        const {id} = this.props;
        KitServices.getSurvivalProductEdit(id)
            .then((survivalProduct) => this.setState({survivalProduct}))
            .catch((error) => console.log(error))
    }

    onChange = (e) => {
        const { survivalProduct } = this.state;
        survivalProduct[e.target.name] = e.target.value
        this.setState( {survivalProduct} )
      };

    addProduct = () => {
        const {survivalProduct} = this.state;
        KitServices.editSurvivalKit(survivalProduct._id, survivalProduct)
            .then(() => this.setState({productUpdated: true}))
            .catch((error) => console.log(error))
    };

    render() {
        const {survivalProduct, productUpdated} = this.state;
        // console.log(survivalProduct)
        if (survivalProduct === ""){
            return(<div>Loading...</div>)
          } else {
            if (this.context.user.role === "Admin" && productUpdated === false) {
                return (
                <div>
                    <h1>Survival Product Update</h1>
                    <Input defaultValue={survivalProduct.influencer} name="influencer" type="text" placeholder="Add influencer id" onChange={this.onChange} />
                    <Input defaultValue={survivalProduct.product} name="product" type="text" placeholder="Add product id" onChange={this.onChange} />
                    <TextArea defaultValue={survivalProduct.comment} name="comment" rows={4} type="text" placeholder="Add product" onChange={this.onChange} />
                    <Input defaultValue={survivalProduct.recommendation} name="recommendation" type="text" placeholder="Add rebound recommendation id" onChange={this.onChange} />                
                    <button onClick={this.addProduct}> Add products </button>
                </div>
        )
    } else {
        Router.push('/admin/influencer-chart');
        return null;
    }
}}
}

export default SurvivalProductUpdate;