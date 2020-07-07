import React, { Component } from 'react';
import AuthServices from '../services/AuthServices';
import Link from 'next/link';
import Router from 'next/router';
import validator from 'email-validator';
import passwordValidator from 'password-validator';
import MediaQuery from 'react-responsive';
import * as toastr from 'toastr';

class Login extends Component {

  state = {
    username: '',
    password: '',
    path: '',
    password2:'',
    signup: false,
    firstName: '',
    lastName: ''
  };




  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }




  handleFormSubmitSignup = (event) => {
    event.preventDefault(event);
  
    let schema = new passwordValidator();

    schema
      .is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits()
      .has().not().spaces()

    if (!validator.validate(this.state.username)) {

      return toastr.error("Wrong Email Format");

    } else if (!schema.validate(this.state.password)) {

      return toastr.error("Password must have Uppercase, Lowecase, Digits, and min length is 8");

    } else if (this.state.password !== this.state.password2) {
      
      return toastr.error("Passwords Dont Match")
    }
    else {
      const { username, password, firstName, lastName } = this.state;

      const user = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
      };

      AuthServices.signup(user)
        .then(response => {
          if (response.data.username) {
            AuthServices.login(user)
              .then(response => {
                if (response.status === 200) {
                  this.props.giveuser(response.data);
                  Router.push('/');
                }
              }).catch(error => {
                toastr.error("Invalid username or password");
                console.log(error);
              })
          } else if (response.data.error){
            toastr.error("User Taken")
            console.log("User taken");
          }
        }).catch(error => {
          console.log(error);
        })
    }
  }

  handleFormSubmitLogin = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    const user = {
      username: username,
      password: password
    };

    AuthServices.login(user)
      .then(response => {
        if (response.status === 200) {
          this.props.giveuser(response.data);
          Router.push('/');
        }
      }).catch(error => {
        toastr.error("Invalid username or password");
        console.log(error);
      })
  }
  signUp = () => {
    this.setState({loggedin: false})
  }
  savePath = () => {
    window.previousLocation = this.props.location;
    this.setState({ path: window.previousLocation });
  }

  componentDidMount = () => {
    this.savePath();
  }
  showMail = () => {
    const {username} = this.state;

    if (username === "") {
      return( <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img> )
    } else {
      return(<div style={{width:"1.25vw"}}></div>)
    }
  }
  showLock = () => {
    const {password} = this.state;

    if (password === "") {
      return( <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img> )
    } else {
      return(<div style={{width:"1.25vw"}}></div>)
    }
  }

  switchState = () => {
    this.setState({signup: true})
  }
  switchStateBack = () => {
    this.setState({signup: false})

  }

  render() {

      if (this.state.signup === true){
      return (
        <div>
        <MediaQuery maxDeviceWidth={490}>
        <div className="mobile-login-page">
        <div className="mobile-login-form">
          <div className="">
            <form className="login-form" onSubmit={this.handleFormSubmitSignup}>
              <div className="p-login-header">
              <p className="p-login">Sign up</p>             
              <p className="new-signup">Welcome to Rebound</p>    
              {/* <Link href="login" as={`login`}><p className="new-login signup">SIGN UP FOR FREE!</p></Link> */}
              </div>
              <div className="inputs-login">
              <div className="name-last-container">
                <input className="inputs-login-styling margin-input-login" placeholder="First Name" type="text" name="firstName" onChange={e => this.handleChange(e)} />
                <input className="inputs-login-styling margin-input-login" placeholder="Last Name" type="text" name="lastName" onChange={e => this.handleChange(e)}/>
              </div>
                <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img>
                <input placeholder="Password" type="password" className="inputs-login-styling margin-input-login" name="password" onChange={e => this.handleChange(e)} />
                <input placeholder="Re-type password" type="password" className="inputs-login-styling margin-input-login" name="password2" onChange={e => this.handleChange(e)} />
                
                {/* <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img> */}
              <button type="submit" className="login-button-signup"><span className="login-font">Sign up</span></button>
              </div>              
              <div className="remember-div">
                <span>Already have an account?</span>
                <button onClick={this.switchStateBack} id="account-log-in">Log in</button>
              </div>
            </form>
          </div>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={700}>
        <div className="login-form-parent">
          <div className="signup-rectangle">
          <form className="signup-form" onSubmit={this.handleFormSubmitSignup}>
          <p className="s-login">Sign Up</p>
            <div className="signup-container">
              <div className="name-last-container">
                <input className="inputs-login-styling margin-input-login" placeholder="First Name" type="text" name="firstName" onChange={e => this.handleChange(e)} />
                <input className="inputs-login-styling margin-input-login" placeholder="Last Name" type="text" name="lastName" onChange={e => this.handleChange(e)}/>
              </div>
              <input className="inputs-login-styling margin-input-login" placeholder="Email" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              <input className="inputs-login-styling margin-input-login" placeholder="Password" type="password" name="password" onChange={e => this.handleChange(e)} />
              <input className="inputs-login-styling margin-input-login" placeholder="Re-type password" type="password" name="password2" onChange={e => this.handleChange(e)} />
             
              {/* <input className="inputs-login-styling margin-input-login" placeholder="Confirm Password/not working" name="password2" onChange={e => this.handleChange(e)}/> */}

            </div>
            {/* <button type="submit" className="button-id">Submit</button> */}
            <button type="submit" className="sign-up-button form"><span className="login-font">Sign Up</span></button>
            <div className="terms-conditions-div">
              <p>By clicking this Sign up button you agree to our</p>
              <p>Terms and Conditions and Privacy Policy</p>
            </div>
            {/* <p>Already have account?
              <Link href={"/login"}> Login</Link>
            </p> */}
          </form>
          </div>
          <div className="orange-signup-rectangle">
            <div className="not-signup-container">
              <p><b>Have an account?</b></p> 
            <button className="sign-up-button" onClick={this.switchStateBack} ><b>Log In</b></button>
            </div>
          </div>
        </div>
        </MediaQuery>
        </div>
      )
    } else {
      return (
        <div>
        <MediaQuery maxDeviceWidth={490}>
        <div className="mobile-login-page">
        <div className="mobile-login-form">
          <div className="">
            <form className="login-form" onSubmit={this.handleFormSubmitLogin}>
              <div className="p-login-header">
              <p className="p-login">Log in</p>             
              <p className="new-login">New to Rebound?</p>    
              <p id="sign-up-redirect-bttn" onClick={this.switchState} className="new-login signup">SIGN UP FOR FREE!</p>
              </div>
              <div className="inputs-login">
                <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                <input placeholder="Password" type="password" className="inputs-login-styling margin-input-login" name="password" onChange={e => this.handleChange(e)} />
                <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img>
              <button type="submit" className="login-button"><span className="login-font">Log in</span></button>
              </div>              
              <div className="remember-div">
                <div className="">
                <input type="checkbox"/><span>Remember Me</span>
                </div>
                <span id="forgot-password" to="recover-pass">Forgot Password?</span>
              </div>
            </form>
          </div>
        </div>
        </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={700}>
          <div className="login-form-parent">
            <div className="login-rectangle">
              <form className="login-form" onSubmit={this.handleFormSubmitLogin}>
                <p className="p-login">Log In</p>
                <div className="inputs-login">
  
                  <input placeholder="Email" className="inputs-login-styling margin-input-login" type="text" name="username" onChange={e => this.handleChange(e)} />
                  {this.showMail()}
                  {/* <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567455103/email_icon.svg" alt="a mail"></img> */}
                  <input placeholder="Password" className="inputs-login-styling margin-input-login" type="password" name="password" onChange={e => this.handleChange(e)} />
                  {this.showLock()}
                  {/* <img className="mail-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567525727/lock.svg" alt="a lock"></img> */}
                </div>
                <button type="submit" className="login-button"><span className="login-font">Log in</span></button>
                <div className="forgot-pass-parent">
                  <div className="remember-me-container">
                  <input type="checkbox"/><span>Remember Me</span>
                  </div>
                  <span id="forgot-password" to="recover-pass">Forgot Password?</span>
                </div>
              </form>
            </div>
            <div className="orange-login-rectangle">
              <div className="not-signup-container">
                <p><b>Don't have an account yet?</b></p> 
              <button className="sign-up-button" onClick={this.switchState}><b>Sign up</b></button> 
              </div>
            </div>
          </div>
          </MediaQuery>
          </div>

      )
    }
  }
}

export default Login;

