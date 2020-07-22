import React, { Component } from 'react'
import { Input } from 'antd';
import * as toastr from 'toastr';
// import EmailServices from '../../services/EmailServices';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SimpleForm from "../MailChimp/SimpleForm";

const url = "https://gmail.us5.list-manage.com/subscribe/post?u=d023c0ec0d058304602266614&amp;id=2cf9111764";

class EmailBox extends Component {

    render () {
        console.log(this.state);


        return (
            <div className="email-box">
            <p>Get the new episodes and exclusive tips/tools and techniques</p>

            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm onSubmitted={formData => subscribe(formData)} />
                  {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                  {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                  {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                </div>
              )}
            />
            </div>

        )
    }
}

export default EmailBox