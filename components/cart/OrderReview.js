import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import QtyContext from "../contexts/QtyContext";

const cookies = new Cookies();

class OrderReview extends Component {

  state = {
    order: [cookies.get("Products")],
    products: [],
    shipping: 10
  }
  componentDidMount = () => {
    this.setState({order:cookies.get("Products"),})
  }
  totalQty = (qty,price) => {
    let total = qty * price;
    return total;
  }

  getTotal = () => {
    let counter = 0;
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");

    if (cookies.get("Products") === undefined) {
      return;
    }

    if (cookieArr !== undefined) {
      for (let i = 0; i < cookieArr.length; i++) {
        counter += (cookieArr[i].prize * cookieArr[i].qty);
      }
    }

    if (counter === 0) {
      this.setState({
        ...this.state,
        products: null
      })
    }

    return counter;
  }

  getShipping = () => {
    let { shipping } = this.state;
    
    return shipping
  }

  getTotalAmount = () => {
    let {shipping} = this.state;
    let total = this.getTotal();
    let addedTotal = total + shipping;
    
    return addedTotal
  }



  render() {
      const {order} = this.state || [];

      if (order === 0) {
        return( <div>...</div>)
      }
      return(
        <div className="order-summary-container">
            <div className="order-title">
                <h2>Order Summary</h2>
              <a href="/cart" as={`/cart`} > <p><b>Edit</b></p></a>
            </div>
            <div>
            {order.map((p,index) => {
              return (
              <div key={index}>
              <div className="order-item-container">
                  <div className="order-picture-div">
                    <img id="order-image" src={p.images} alt="Product picture"/>
                  </div>
                  <div className="order-item-model">
                    <p><b>{p.model}</b></p>
                    <div className="order-price">
                      <p>{p.qty} x  ${p.prize}.00</p>
                      <p>{this.totalQty(p.qty,p.prize)}</p>
                    </div>
                  </div>
              </div>
              </div>)
             })}
            </div>
            <div className="order-review-card">
                <div className="order-subtotal">
                  <p>Subtotal  </p>
                  <p>$ {this.getTotal()}.00 </p>
                </div>
                <div className="order-subtotal">
                <p>Shipping & Handling </p>
                  <p>$ {this.getShipping()}.00</p>
                </div>
                <div className="order-subtotal winner">
                <p>Total </p>
                <p style={{height: "24px",fontWeight:"bold"}}>$ {this.getTotalAmount()}.00</p>
                </div>
                <div className="order-button">
                <Link href={"/pay-checkout"}>
            <button id="cart-checkout" style={{width:"215px",height:"54px", margin:" 2vh 0 0 8vw"}}>{this.props.button}</button>
                </Link>
                </div>
              </div>
              

        </div>
      )
  }
}

export default OrderReview