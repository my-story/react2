import React, { Component } from 'react';
import EmailServices from "../services/EmailServices"


class Contact extends Component {
    state = {
        email: "",
        name: ""
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
        return(

            <div className="contact-page">
                <h1> Contact us - <br></br>warm response guaranteed  </h1>
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
                    <p><b>478 Young Drive <br></br> 
                    Brandon, FL 33511, United States</b></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact