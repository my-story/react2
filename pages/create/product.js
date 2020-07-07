import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input } from 'antd';
const { TextArea } = Input;

class ProductTip extends Component {
    state = {
        product: {},
        created: false
    }

    onChange = (e) => {
        const { product } = this.state;
        product[e.target.name] = e.target.value
        this.setState( {product} )
      };
    
    addProduct = () => {
        const {product} = this.state;

        KitServices.createSurvivalProduct(product)
            .then(() => this.setState({created: true}))
            .catch((error) => console.log(error))
    }
    render() {
        console.log(this.state)
        return(
            <div>
                <Input name="influencer" type="text" placeholder="Add influencer id" onChange={this.onChange} />
                <Input name="product" type="text" placeholder="Add product id" onChange={this.onChange} />
                <TextArea name="comment" rows={4} type="text" placeholder="Add product" onChange={this.onChange} />
                <button onClick={this.addProduct}> Add products </button>
            </div>
        )
    }
}

export default ProductTip;
