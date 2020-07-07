import React from 'react';
import App, { Container } from 'next/app';
import Cookies from 'universal-cookie';
import {Helmet} from 'react-helmet';
import NavBar from '../components/NavBar';
import { QtyProvider } from "../components/contexts/QtyContext"
import { UserProvider } from "../components/contexts/UserContext";
// import { NavBarCssProvider } from "../src/components/contexts/NavBarCssContext";
import AuthServices from '../services/AuthServices';
import '../components/styles/index.css';
import '../components/styles/mobile.css';
import '../components/styles/tablet.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import 'antd/dist/antd.css'; 
import 'react-dropdown/style.css'
import Footer from '../components/Footer';

class MyApp extends App {
  state = {
    loggedInUser: "",
    islogged: "",
    error: null,
    details: '',
    clientAddress: '',
    getQty: this.getQty(),
    // NavBarCss: "ss"
  }

  getUser = (user) => {
    this.setState({
      loggedInUser: user,
      islogged: true,
    });
  }

  checkLogged = () => {
    AuthServices.loggedin()
      .then(res => {
        this.setState({ islogged: true, loggedInUser: res.data });
      })
      .catch(e => {
        this.setState({ islogged: false });
        console.log(e);
      });
  };

  bye = () => {
    if (this.state.islogged) {
      this.setState({
        loggedInUser: {},
        islogged: false
      })
    } else {
      console.log("Already Logged out");
    }
  }

  componentDidMount = () => {
    this.checkLogged();
  }

  getQty() {
    const cookies = new Cookies();
    const cookieArr = cookies.get("Products");

    let total = 0;
    if (cookieArr === undefined) {
      return;
    } else {
      for (let i = 0; i < cookieArr.length; i++) {
        total += cookieArr[i].qty;
      }
    }
    return total;
  }

  updateQty = () => {
    this.setState({
      getQty: this.getQty()
    });
  }

  getAddress = (address) => {
    this.setState({
      clientAddress: address
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    if (this.state.islogged === "") {
      return (
        <Container>
          <div>loading...</div>
        </Container>
      );
    } else {
      return (
        <Container>
          {/* TITLE, DESCRIPTION,Logo of page. */}
        <Helmet>
        <meta charSet="utf-8" />
        <title>Rebound | Embrace Adversity</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Uncover the tools you need for overcoming your mental barriers. Follow our Sage's advices, and create new positive habits. " />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584463817/ReboundIconSquare-01.png" type="image/x-icon"></link>
        </Helmet>

          <QtyProvider value={{ getQtyState: this.state.getQty, updateQty: this.updateQty }}>
            {/* <NavBarCssProvider value={{css: this.state.NavBarCss}}> */}
            <UserProvider value={{ user: this.state.loggedInUser, islogged: this.state.islogged, setAddress: this.getAddress, address: this.state.clientAddress }}>            
            <NavBar {...pageProps} islogged={this.state.islogged} checklogged={this.checkLogged} logout={this.bye} user={this.state.loggedInUser}></NavBar>
            {/* </NavBarCssProvider> */}
              
              <Component {...pageProps} giveuser={this.getUser} signout={this.bye} checklogged={this.checkLogged} user={this.state.loggedInUser} />
            </UserProvider>
          </QtyProvider>
        <Footer></Footer>
        </Container>

      );
    }
  }
}

export default MyApp;