import React, { Component } from 'react';
import Link from 'next/link';
// import {Link} from 'react-router-dom'
import Router from 'next/router';
import * as toastr from 'toastr';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';

class InfluencerList extends Component{
  state = {
    update: false,
  }

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  static contextType = UserContext;

  delete = () => {
    let  id  = this.props.influencer._id;
    let user = {user: this.context.user};

    InfluencerServices.deleteInfluencer(user, id)
      .then((review) => {   
          console.log(review);
          toastr.success("deleted the review");
      })
      .catch(err => console.log(err));
  }


  saidNo = () => {
    toastr.error("didn't delete the review");
  }

  submit = () => {
    confirmAlert({
      title: 'Confirm to delete this review',
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

  update = () => {
    this.setState({
      update: true
    })
  }

  render() {
console.log(this.props)
    if (this.context.user.role !== "Admin") {
      return(
        // <div key={this.props.index} className="influencer-card">
        // <Link href={`review/${this.props.influencer._id}`}>
        //   <div>
        //     <p>name: {this.props.influencer.name.firstName} lastname: {this.props.influencer.name.lastName}</p>          

        //     <p>description: {this.props.influencer.review}</p>
        //     {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
        //   </div>
        // </Link>
        // </div>
        // <div>
    <div style={this.props.style} key={this.props.index}>
      
    <Link href={`review/${this.props.influencer._id}`}>        
        <div className="category-card">
            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565215728/icon.svg" alt="the product" className="icon"/>
            <span className="photography">Photography</span>
        </div>
        <div class="bottom-card">
          <div id="name-votes">
            <p id="name-card"><b>{this.props.influencer.name.firstName} {this.props.influencer.name.lastName} </b></p>
        <div class="votes">
        <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373742/arrow_1.svg" id="arrow" alt="arrow-down"/>
      <p>23</p>
          <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565373737/arrow_2.svg" id="arrow" alt="arrow-up"/>
      </div>
    </div>
    <div class="product-bubble">
      <img id="product-picture" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565216217/img.png" alt="product-picture"/>
    </div>
  </div>
  </Link> 
  </div>

//  </div>



      )
    } else {
      if (this.state.update === true) {
        Router.push('/influencerUpdate/' + this.props.influencer._id);
        return null;
      }
      return(
        <div className="influencer-card">
        <Link href={`review/${this.props.influencer._id}`}>
          <div>
            <p>name: {this.props.influencer.name.firstName} lastname: {this.props.influencer.name.lastName}</p>
            <p>description: {this.props.influencer.review}</p>
            {/* <img height="100" src={i.profilePic} alt={i.name} /> */}
          </div>
        </Link>
        <button onClick={this.update}>Update</button>
        <button onClick={this.submit}>Delete</button>
        </div>
      )
    }
  }
}

export default InfluencerList;


