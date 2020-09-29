import React, { Component } from 'react';
import * as toastr from 'toastr';
import MailerServices from "../services/MailerServices";


class Contact extends Component {
    state = {
        data: {
            email: "",
            name: "",
            message: "",
        },
 
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
        .then(() => {
            toastr.success("Email sent!")
            this.setState({sent: true})
        })
        .catch((error) => console.log(error))
    }
    
    render(){

        const {height} = this.state;

        console.log(this.state);
        return(

            <div className="contact-page" height={height}>
                <h1> Contact us - warm response guaranteed!</h1>
                <p id="contact-us-message">If you have any questions or stories you'd like to share fill in the form below. We would also love to hear your feedback and any suggestions for future guests or topics.</p>
                <p>You can also send an email over to <b>reboundtalks@gmail.com</b></p>
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

export default Contact