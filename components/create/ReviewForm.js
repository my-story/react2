import React,{ Component } from 'react';
// import { Redirect} from 'react-router-dom';
import Router from 'next/router';
import { Input } from 'antd';
import UserContext from '../contexts/UserContext';
import ReviewServices from "../../services/ReviewServices";

const { TextArea } = Input;

class ReviewForm extends Component {
    state= {
      kit: "",
      influencer:this.props.influencer,
      video:"",
      voicenote:"",
      created:false,
      // product: this.props.product,
      reviewDone:{}
    }

    static contextType = UserContext;

    onChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = () => {
      ReviewServices.createReview({
          influencer: this.state.influencer,
          video: this.state.video,
          kit: this.state.kit,
          voicenote: this.state.voicenote,
          // product: this.state.product,
          user: this.props.user
        })
        .then((res) => this.setState({created:true,reviewDone:res}))
        .catch((e)=>console.log(e))  
    };
      
    

    render() {
      if (this.context.user.role === "Admin") {
        if (this.state.created) {    
            Router.push('/');
            return null;
        } else {
          return (
            <div>  
              <Input name="influencer" placeholder="Please enter infleuncer ID "  allowClear onChange={this.onChange} />
              <Input name="video" placeholder="Please enter VIDEO URL YOUTUBE " allowClear onChange={this.onChange} />
              <Input name="kit" placeholder="Please enter kit id" allowClear  onChange={this.onChange} />
              <Input name="voicenote" placeholder="Please enter VOICENOTE URL CLOUDINARY " allowClear onChange={this.onChange} />
              {/* <Input name="product" placeholder="Please enter influencer product" allowClear onChange={this.onChange} /> */}
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          )}   
          } else {
            Router.push('/');
            return null;
          }
}; 
};

export default ReviewForm;