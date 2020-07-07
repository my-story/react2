import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import ProductServices from "../../services/ProductServices";
import ReviewServices from "../../services/ReviewServices";
import KitServices from '../../services/KitServices';

class AdminPanelField extends Component {
  state = {
    influencers: {},
    product: "",
    review: "",
    kit: "",
    tip: "",
    technique: "",
    survivalProduct: ""
  };

  getAll = (id) => {
    // ProductServices.getOneAdmin(id)
    //   .then(product => this.setState({
    //     product: product
    //   }))
    //   .catch((err) => console.log(err))

    ReviewServices.getReviewAdmin(id)
      .then(review => this.setState({
        review: review
      }))
      .catch((err) => console.log(err))

    KitServices.getKit(id)
    .then(kit => this.setState({
      kit: kit
    }))
    .catch((err) => console.log(err))
    
    KitServices.getTipAdmin(id)
      .then(tip => this.setState({
        tip: tip
      }))
      .catch((err) => console.log(err))

      KitServices.getTechniqueAdmin(id)
      .then(technique => this.setState({
        technique: technique
      }))
      .catch((err) => console.log(err))

      KitServices.getSurvivalProductAdmin(id)
      .then(survivalProduct => this.setState({
        survivalProduct: survivalProduct
      }))
      .catch((err) => console.log(err))
    
    
  }

  componentDidMount = () => {
    this.getAll(this.props.influencer._id);
  }

  onClickKit = () => {
    Router.push(`/admin/kit-update/${this.state.kit._id}`);
  }

  onClickInfluencer = () => {
    Router.push('/admin/influencer-update/' + this.props.influencer._id);
  }

  onClickReview = () => {
    Router.push('/admin/review-update/' + this.props.influencer._id);
  }

  render() {
    const {tip, technique, survivalProduct} = this.state;

    if (survivalProduct && tip && technique){
    return(
      <div className="admin-panel-influencer">
        <h4>Click to update</h4>
      <ul>
        <li onClick={this.onClickInfluencer}>Influencer = {this.props.influencer.name.firstName} {this.props.influencer.name.lastName}. ID = {this.props.influencer._id}</li>
        <li onClick={this.onClickKit}>KIT = {this.state.kit.title}. ID = {this.state.kit._id}</li>
        {/* <li onClick={this.onClickProduct}>Product: {this.state.product[0].model}</li> */}
        <li onClick={this.onClickReview}>REVIEW = {this.state.review.title}. ID = {this.state.review._id}</li>
        {/* TIPS */}
        {tip.map((tip,index) => {
        return(
          <div>
          <Link href={`/admin/tip-update/${tip._id}`} key={index}>
            <li>TIP = {tip.header}. ID= {tip._id}</li>
          </Link>
          </div>
        )
      })}
      {technique.map((technique,index) => {
        return(
          <div>
          <Link href={`/admin/technique-update/${technique._id}`} key={index}>
            <li>TECHNIQUE = {technique.title}. ID= {technique._id}</li>
          </Link>
          </div>
        )
      })}
      {survivalProduct.map((survivalProduct,index) => {
        return(
          <div>
          <Link href={`/admin/survival-product-update/${survivalProduct._id}`} key={index}>
            <li>SurvivalProduct = {survivalProduct.comment}. ID= {survivalProduct._id}</li>
          </Link>
          </div>
        )
      })}
      </ul>
      </div>
    )
    } else {
      return(
        <ul>
          <li>Loading...</li>
        </ul>
      )
    }
  }
}

export default AdminPanelField;