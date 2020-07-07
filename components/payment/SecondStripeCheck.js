import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import * as toastr from 'toastr';
import OrderServices from '../../services/OrderServices';
import MailerServices from '../../services/MailerServices';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';
import ProductServices from '../../services/ProductServices';
import PaymentServices from '../../services/PaymentServices';
import { Input } from 'antd';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      user: {
        email: '',
        name:'',
      },
      message: {
        total: this.props.total,
        products: ""
      },
      paid: false,
      charged: 0,
      total: 0
    }
  };
  static contextType = UserContext;


  componentDidMount () {
    const cookies = new Cookies();
    let products = cookies.get("Products");
    console.log(products)
    this.setState({products});
  };

  reward = (rewardArr) => {
    for (let i = 0; i < rewardArr.length; i++) {
      let revenue = rewardArr[i].price * rewardArr[i].qty;
      
      InfluencerServices.getOne(rewardArr[i].influencer)
        .then((influencer) => {
          let influencerCut = revenue * influencer.data.percentage;
          let newReward = influencerCut + influencer.data.reward;

          InfluencerServices.addReward({reward:newReward}, influencer.data._id)
            .then((influencer) => {
              console.log("added influencer reward to" + influencer);
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => console.log(error));
    }
  };
  
  totalProductUpdate = (array) => {
    for (let i = 0; i < array.length; i++){
      let qty = array[i].qty;
      let id = array[i]._id;
      
      ProductServices.updateTotal(id , {qty: qty})
        .then((product) => {
          console.log(product);
        })
        .catch((error) => console.log(error));
    }
  };

   getInfluencers = (products) => {
    const rewardArr = [];
    let reward = {};
    for (let i = 0; i < products.length; i++){
      reward["influencer"] = products[i].influencer;
      reward["price"] = products[i].prize;
      reward["qty"] = products[i].qty;
  
      rewardArr.push(reward);
      reward = {};
    }
    return rewardArr;
  };

  onChange = (e) => {
    let { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  }

  toggleSubmit = () => {
    this.refs.submitbutton.setAttribute("disabled", "disabled");
  };
  // $('submitbutton').click(function(event) {
  //   if(!event.detail || event.detail == 1){ return true; }
  //   else { return false; }
  // });



  async submit(ev) {

    let {token} = await this.props.stripe.createToken({name: this.state.user.email});

    if (this.state.user.email === ""|| this.state.user.email === ""){
      toastr.error("Missing Credentials")
    } else {
      this.toggleSubmit();

      if (this.state.charged === 0){
        this.setState({
          charged: 1,
        });
        
        PaymentServices.charge({
          headers: {"Content-Type": "text/plain"},
          token: token.id,
          total: Math.trunc(this.props.total * 100),
        })
          .then(() => {
              const cookies = new Cookies();
              let products = cookies.get("Products");
              let rewardArr = this.getInfluencers(products);
              this.totalProductUpdate(products);
              this.reward(rewardArr);
  
  
              OrderServices.createOrder({user:this.context.user, products: products, address:this.props.address, email:this.state.user.email, name:this.state.user.name})
              .then(() => {
                this.setState({
                  paid: true
                });
  
                MailerServices.sendMail({name:this.state.user.name , email:this.state.user.email, message:this.state.message})
                .then((info) => console.log(info))
                .catch((err) => console.log(err));
              })
              .catch((e)=> console.log(e));
  
              })
          .catch((err) => {
            toastr.error("Payment Declined");
            this.setState({
              charged: 0
            })
          });
      }
      }
  };
  

  render() {
    console.log(this.state);

    if (this.state.paid === true ) {
      Router.push('/order-fulfillment');
      return null;
    }

    return (
      <div className="checkout">
        <div className="checkout-address-input2">
          <div>
            <p>Name on Card</p>
            <Input id="checkout-input" type="text" name="name" placeholder="John Doe" onChange={this.onChange}/>
            <p>Email</p>
            <Input id="checkout-input" type="email" name="email" placeholder="john@gmail.com" onChange={this.onChange}/> 
          </div>
         {/* <p>Name on Card</p>
         <Input id="checkout-input2" type="text" name="name" placeholder="John Doe" onChange={this.onChange}/>
         <p>Email</p>
         <Input id="checkout-input2" type="email" name="email" placeholder="john@gmail.com" onChange={this.onChange}/> */}
        </div>
        <div className="checkout-card">
          <CardElement/>
        </div>
        <br></br>
        <button ref="submitbutton" onClick={this.submit}>Send</button>
      </div>
    );
    
  }
};

export default injectStripe(CheckoutForm);