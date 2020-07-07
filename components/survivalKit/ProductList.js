import React, { Component } from "react";
import KitServices from "../../services/KitServices";

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        KitServices.getListProducts()
            .then((products) => this.setState({products}))
            .catch((error) => console.log(error))
    }
    render() {
        const {products} = this.state;
        if(products.length > 0) {
            return(
                <div className="technique-list-page">
                     <h4>ProductsList</h4>
                    {products.map((product, index) => {
                        return(
                            <div className="list-survival" key={index}>
                               <p> ID :  {product._id}</p>
                               <p> Influencer : {product.influencer} </p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return(<div> No Unassigned Products</div>)
        }
    }
}

export default ProductList;