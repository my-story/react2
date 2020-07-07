import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
// import axios from 'axios';
import * as toastr from 'toastr';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ProductServices from '../../services/ProductServices';
import UserContext from '../contexts/UserContext';


class ProductOne extends Component {
  state = {
    update: false,
  }
  static contextType = UserContext;

  delete = () => {
    let id = this.props.i.influencer._id;
    ProductServices.deleteProduct(id)
      .then(() => toastr.success("deleted the product"))
      .catch(err=>console.log(err))
  };

  update = () => {
    this.setState({
      update: true
    })
  };

  saidNo = () => {
    toastr.error("didn't delete the product");
  };   

  submit = () => {
    confirmAlert({
      title: 'Confirm to delete this product',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.delete()
        },
        {
          label: 'No',
          onClick: () => this.saidNo()
        }
      ]
    });
  };

  // getGlyphicon = (category) =>{
  //   const Comedy = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567710375/icons8-comedy-100_1.png";
  //   const Athlete = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567788668/icons8-sport-96.png";
  //   const Author = "https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567788259/icons8-paragraph-96.png"; 

  //   const arr = [{"Comedian": Comedy}, {"Athlete": Athlete}, {"Author": Author}];

  //   for(let i = 0; i < arr.length; i++){
  //     if(Object.keys(arr[i]).join('') === category){
  //       return arr[i][category];
  //     }
  //   }
  // }

  render() {
    return( 
        <div key={this.props.index} className="product-big-card">
          <Link href="product/[id]" as={`product/${this.props.i._id}`} key={this.props.index} prefetch>
              <div className="product-big-card-image">
                <img className="product-big-card-image-size" src={this.props.i.images[0]} alt={this.props.i.name} />
               <div className="p-product-info-div"> 
                  {/* <div className="p-product-big"> */}
                  <span id="product-card-name">{this.props.i.model}</span>
                  {/* </div> */}
                  {/* <div className="p-product-big"> */}
                  <span id="product-card-price">${this.props.i.prize}</span>
                  {/* </div> */}
                </div>
              </div>
          </Link>
        </div>
    )
  }
}

export default ProductOne;