import React, { Component } from 'react'
import { Input } from 'antd';
import * as toastr from 'toastr';
// import EmailServices from '../../services/EmailServices';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SimpleForm from "../MailChimp/SimpleForm";

const url = "https://reboundwithus.us2.list-manage.com/subscribe/post?u=be490e3de2417fa6db846b476&amp;id=6683dc909a";

class EmailBox extends Component {

    render () {
        return (
            <div className="email-box">
            <p> <b>Get the new episodes and exclusive tips/tools and techniques</b></p>

            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <SimpleForm onSubmitted={formData => subscribe(formData)} />
                  {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
                  {status === "error" && <div style={{ color: "red" }}> Already Subscribed!</div>}
                  {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                </div>
              )}
            />
            </div>

        )
    }
}

export default EmailBox
