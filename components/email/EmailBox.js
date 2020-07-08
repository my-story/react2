import React, { Component } from 'react'
import { Input } from 'antd';
import * as toastr from 'toastr';
import EmailServices from '../../services/EmailServices';

class EmailBox extends Component {

    state = {
        email: ""
    }

    addEmail = () => {
        const {email} = this.state;

        EmailServices.addSubscriber(email)
            .then(() => toastr.info("Success!"))
            .catch(() => toastr.info("Success!"))
    }

    onChange = (e) => {
        let { email } = this.state;
        email = e.target.value;
        this.setState({ email });
      };
    
    render () {
        console.log(this.state);

        return (
            <div className="email-box">
            <p>Get the new episodes and exclusive tips/tools and techniques</p>
            <Input name="email" placeholder="Subscribe to our newsletter" id="input-newsletter" allowClear onChange={this.onChange} />
            <button onClick={this.addEmail} id="subscribe-button">Subscribe!</button>
            </div>

        )
    }
}

export default EmailBox