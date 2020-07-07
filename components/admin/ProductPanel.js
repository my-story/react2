import React, { Component } from 'react';
import Link from 'next/link';

class ProductPanel extends Component {

    render() {
        return (
            <ul>
                <Link href={`/admin/product-update/${this.props.product._id}`}>
                <li>PRODUCT = {this.props.product.model}. ID = {this.props.product._id}</li> 
                </Link>  
            </ul>
        );
    }
}

export default ProductPanel;