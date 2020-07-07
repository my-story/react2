import React,{ Component } from 'react';
import * as toastr from 'toastr';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import ProductServices from '../../services/ProductServices';
import QtyContext from '../contexts/QtyContext';
let fetched = 0;

class CartBubble extends Component {
  state = {
    category: "",
    description: "",
    influencer: {},
    model: "",
    prize: "",
    images: "",
    _id: "",
    qty: 1,
    total: undefined,
    count: 0
  };
  
  static contextType = QtyContext;

  fetchProduct = () =>{
    if (fetched < 2){
      const id = this.props.product._id;
   
      ProductServices.productDetail(id)
        .then((res) => this.setState(res))
        .catch(err => console.log(err));
      fetched++;
    }
  }

  addCart = () => {
    this.fetchProduct();
    
    const prepareStateForCookie = state => {
      // modifying state is bad practice so we need a copy of it
      // since profilePic is base64 we need to set it to null otherwise we will quickly exceed the Cookie size limit
      const stateCopy = {...state, influencer: {...state.influencer}}; 
      stateCopy.influencer.profilePic = null;
      return stateCopy;
  };

  const cookies = new Cookies();
  if (this.state.total === 0) {
    toastr.error("this product is sold out");
  }

  if (this.state.qty <= 9 && this.state.qty <= this.state.total && this.state.total !== 0) {
    if (cookies.get("Products") !== undefined) {
      var currentProducts = cookies.get('Products');
      var isRepeated = false;
      for (var i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].influencer._id === this.state.influencer._id) {
          currentProducts[i].qty = currentProducts[i].qty + 1;
          this.setState({ qty: currentProducts[i].qty + 1 });
          isRepeated = true;
        };
      };
      if (isRepeated) {
        cookies.set("Products", currentProducts, { path: '/' });
      } else {
        currentProducts.push(prepareStateForCookie(this.state));
        cookies.set("Products", currentProducts, { path: '/' });
      }
    } else {
      cookies.set("Products", [prepareStateForCookie(this.state)], { path: '/' });
    }
    this.context.updateQty();
  };
  }


  render(){
    return(
      <div className="product-bubble" onMouseEnter={this.fetchProduct}>
        <div className="column">
        <Link href="/product/[id]" as={`/product/${this.props.product._id}`}> 
        <div>
          <img className="product-inside-bubble" src={this.props.product.images} alt="the product being sold"/>
          <span className="text-inside-bubble">{this.props.product.model}</span>
          <span className="text-inside-bubble prize-bubble">${this.props.product.prize}</span>
        </div>
        </Link>               
          <div className="text-inside-bubble"><button onClick={this.addCart} className="add-to-cart"><b>Add to Cart</b></button> </div>
        </div>
     </div>
    )
  }
}


export default CartBubble;

