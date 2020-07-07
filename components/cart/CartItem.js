import  React , { Component }  from 'react';
import Cookies from 'universal-cookie';
import QtyContext from "../contexts/QtyContext";

class CardItem extends Component {
  state = {
    product: "",
    value: this.props.times
  }

  static contextType = QtyContext;

  setProduct() {
    this.setState({
      product: this.props.product
    });
  }

  componentDidMount() {
    this.setProduct();
  }
  
  onChange = (e, influencerId) => {
    this.setState({
      value: parseInt(e.target.value)
    })

    const cookies = new Cookies();
    let currentProducts = cookies.get('Products');
       
    for (let i = 0; i < currentProducts.length; i++) {
      if (currentProducts[i].influencer._id === influencerId) {
        currentProducts[i].qty = parseInt(e.target.value)
      }
    }

    cookies.set("Products", currentProducts, { path: '/' });
    this.props.updateTotal();
    this.context.updateQty();
  }

  fixNums() {
    let arr = [];

    for (let i = 1; i <= this.state.product.total; i++) {
        arr.push(<option value={i}>{i}</option>); 
    }

    return(arr);
  }

  render() {
    const { product } = this.state;
    console.log(product);

    if (this.state.product.total >= 9) {
      return(
        <div className="cart-container">
          <div className="cart-name">
            <div className="cart-image-div">
          <img className="cart-image" src={product.images[0]} alt="product-image" />
          </div>
            <div className="cart-product-name">
              <p><b>{product.model}</b></p>
              <p>Backed by saes</p>
            </div>
          </div>
          <div className="input-group mb-3">
            <p>Quantity</p>
              <select className="custom-select" id="inputGroupSelect01" defaultValue={this.props.product.qty} onChange={(e) => this.onChange(e, this.props.product.influencer._id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
          </div>
          <div className="cart-price">
            <p>$ {this.props.product.prize}</p>
          </div>
        </div>
      )
    } else {
      if (this.state.product.total < 9) {
        return(
          <ul>
            <li>{this.props.product.model}</li>
            <li>Price:{this.props.product.prize}</li>
            <li>
            <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect01" value={this.props.product.qty} onChange={(e) => this.onChange(e, this.props.product.influencer)}>
              {this.fixNums()}
            </select>
            </div>
            </li>
          </ul>
        )
      } else {
        return(<div>loading..</div>)
      }
    }
  }
}

export default CardItem;