import React, { Component } from 'react';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../contexts/UserContext';
import ReviewServices from '../../services/ReviewServices';

const { TextArea } = Input;

class ReviewUpdate extends Component {

  state = {
    title: "",
    video: "",
    voicenote: "",
    influencer: "",
    kit:"",
    created: false
  }

  static contextType = UserContext;

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () =>{
    this.setState({
      title: this.props.oldReview.title,
      video: this.props.oldReview.video,
      kit: this.props.oldReview.kit._id,
      voicenote: this.props.oldReview.voicenote,
      influencer: this.props.oldReview.influencer._id,
      created: false
    });
  }

  handleSubmit = () => {
    let id = this.state.influencer;
    
    const newReview = {
      title: this.state.title,
      kit: this.state.kit,
      influencer: this.state.influencer,
      video: this.state.video,
      voicenote: this.state.voicenote,
    }
    

    ReviewServices.editReview(newReview, id)
      .then(() => {
        console.log("entered the then")
        this.setState({ created: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.context.user.role === "Admin" && !this.state.created) {
      return (
        <div>
          <Input name="title" defaultValue={this.props.oldReview.title} placeholder="Please enter title " allowClear onChange={this.onChange} />
          <Input name="influencer" defaultValue={this.props.oldReview.influencer._id} placeholder="Please enter infleuncer ID " allowClear onChange={this.onChange} />
          <Input name="kit" defaultValue={this.props.oldReview.kit._id} placeholder="Please enter kit ID " allowClear onChange={this.onChange} />
          <Input name="video" defaultValue={this.props.oldReview.video} placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
          <Input name="voicenote" defaultValue={this.props.oldReview.voicenote} placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
          <button onClick={this.handleSubmit}>Update</button>
        </div>
      );
    } else {
      Router.push('/');
      return null;
    }
  }
}

export default ReviewUpdate;