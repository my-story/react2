import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../../../components/contexts/UserContext';
import ReviewServices from "../../../services/ReviewServices";

const { TextArea } = Input;

class ReviewUpdate extends Component {

  state = {
    review: "",
    reviewUpdate: false
  }

  static contextType = UserContext;

  static getInitialProps({ query: { id } }) {
    return { id };
  }

  onChange = (e) => {
    let { review } = this.state;
    review[e.target.name] = e.target.value;
    this.setState( {review} )
  };


  getReview = () => {
    ReviewServices.getReviewAdmin(this.props.id)
      .then((review) => this.setState({review}))
      .catch((error) => console.log(error));
  }

  componentDidMount = () =>{
    this.getReview();
  }

  handleSubmit = () => {
    const id = this.state.review.influencer;
    const {review} = this.state;

    ReviewServices.editReview(review, id)
      .then(() => {
        this.setState({ reviewUpdate: true });
      })
      .catch(err => console.log(err));
  }



  render() {

console.log(this.state)

      if(this.state.review === ""){
        return(<div>Loading...</div>)

      } else {

        if (this.context.user.role === "Admin" && this.state.reviewUpdate === false) {
          return (
            <div>
              <Input name="title" defaultValue={this.state.review.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
              <Input name="influencer" defaultValue={this.state.review.influencer} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
              <Input name="kit" defaultValue={this.state.review.kit} placeholder="Please enter kit ID " allowClear onChange={this.onChange} />
              <Input name="video" defaultValue={this.state.review.video} placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
              <Input name="voicenote" defaultValue={this.state.review.voicenote} placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
              <button onClick={this.handleSubmit}>Update</button>
              {/* <p>saes</p> */}
            </div>
          )
      } else {
      Router.push('/admin/influencer-chart');
      return null;
    }
  }
  }
}

export default ReviewUpdate;