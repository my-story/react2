import React, { Component } from 'react';
import EmailServices from "../services/EmailServices"


class Contact extends Component {
    state = {
        email: "",
        name: "",
        height: 0,
    }

    componentWillMount() {
    this.setState({height: window.innerHeight + 'px'});

    }

    onChange = (e) => {
        if (e.target.placeholder == "Email"){
            let { email } = this.state
            email = e.target.value
            this.setState({ email })
        } else if (e.target.placeholder == "Name"){
            let { name } = this.state;
            name = e.target.value
            this.setState({ name })
        }
      };

    submit = () =>{
        EmailServices.addEmail({email: this.state.email, name: this.state.name})
            .then((email) => console.log(email))
            .catch(err => console.log(err))
    }
    
    render(){

        const height = this.state;
        return(

            <div className="contact-page" height={height}>
                <h1> Contact us - warm response guaranteed!</h1>
                <p id="contact-us-message">If you have any questions or stories you'd like to share fill in the form below. We would also love to hear your feedback and any suggestions for future guests or topics.</p>
                <p>You can also send an email over to <b>reboundtalks@gmail.com</b></p>
                <div className="contact-section">
                    <div className="contact-inputs">
                        <div>
                            <input className="inputs-login-styling" placeholder="Name" onChange={this.onChange}></input>
                            <input className="inputs-login-styling" placeholder="Email" onChange={this.onChange}></input>
                        </div>
                        <textarea className="textarea-styling" rows="4" placeholder="Your message..."></textarea>
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