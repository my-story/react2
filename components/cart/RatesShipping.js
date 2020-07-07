import React, { Component } from 'react';
import Router from 'next/router';

class Rates extends Component{

state = {
		rate: "",
		billing: "",
		address: ""
}

showRates = () => {
		this.setState({rate:this.props.rates, billing:this.props.billingAddress, address:this.props.address});
}

render(){

		if(this.state.rate === "") {
				return(
						<div>
								<div key={this.props.index} className="influencer-card">
								<p>Price: {this.props.rates.amount}</p>
								<p>{this.props.rates.duration_terms}</p>
								<p>Estimated days: {this.props.rates.estimated_days}</p>
								<p>{this.props.rates.provider}</p>
								<p>{this.props.rates.servicelevel.name}</p>
								{/* <input id="checkbox" type="checkbox" /> */}
								<button onClick={this.showRates} >Choose this shipping</button>
								</div>
						</div>  
				)

		} else {
			Router.push({
				pathname: '/pay-checkout',
				query: {
					rate: JSON.stringify(this.state.rate),
					billing: JSON.stringify(this.state.billing),
					address: JSON.stringify(this.state.address),
				}
			})

			return null;
			}
    }
}   

export default Rates