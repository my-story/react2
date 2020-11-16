import React, { Component } from 'react';
import * as toastr from 'toastr';
import Router from 'next/router'
import MailerServices from "../services/MailerServices";


const initialState = {
    data: {
        email: "",
        name: "",
        message: "",
    },

    // height: window.innerHeight + 'px',
    sent: false,
};

class Contact extends Component {
    state = {
        data: {
            email: "",
            name: "",
            message: "",
        },
        done: false,
 
        height: 0,
        sent: false,
    }

    componentWillMount() {
    this.setState({height: window.innerHeight + 'px'});

    }

    onChange = (e) => {
        let {data} = this.state; 
        data[e.target.name] = e.target.value
        this.setState({ data });
    };

    submit = () =>{

        let {data} = this.state;

       MailerServices.sendMail(data)
        .then((res) => {
            toastr.success("Message Sent")
            this.setState({done:true})
        })
        .catch((error) => {
            toastr.error("ERROR: Try again later :(")

        })
    }
    
    render(){

        const {height, done} = this.state;
        console.log(this.state)

        if (done === true) {
                Router.push('/thank_you');
        }else {

            return(

                <div className="contact-page" height={height}>
                    <h1> Contact us - warm response guaranteed!</h1>
                    <p id="contact-us-message">If you have any questions or stories you'd like to share fill in the form below. We would also love to hear your feedback and any suggestions for future guests or topics.</p>
                    <p>You can also send an email over to <b>contact@reboundwithus.com</b></p>
                    <div className="contact-section">
                        <div className="contact-inputs">
                            <div>
                                <input className="inputs-login-styling" placeholder="Name" name="name" onChange={this.onChange}></input>
                                <input className="inputs-login-styling" placeholder="Email" name="email" onChange={this.onChange}></input>
                            </div>
                            <textarea className="textarea-styling" rows="4" name="message" onChange={this.onChange} placeholder="Your message..."></textarea>
                            <div className="contact-button">
                            <button className="submit-button" onClick={this.submit}>Submit</button>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className="contact-address">
                        <p><b>Miami, Fl, 33133</b></p>
                        </div>
                    </div>
    
                </div>
            )
        }
        
    }
}

export default Contact