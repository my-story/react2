import React, {Component} from 'react';
import Link from 'next/link';
// import {Icon} from 'antd';	
import PhoneNavBar from './PhoneNavBar';
import MediaQuery from 'react-responsive';
import {Navbar, Nav} from 'react-bootstrap';
// import {ButtonToolbar, Dropdown,DropdownButton, SplitButton} from 'react-bootstrap';
// import { slide as Menu } from 'react-burger-menu'
import Logout from './auth/Logout';
// import InfluencerServices from '../services/InfluencerServices';
// import {QtyConsumer} from './contexts/QtyContext';
import UserContext from './contexts/UserContext';
import Logo from '../public/images/reboundLogo01.png';
// import ProfileGlyph from '../public/images/user-circle-solid.svg';

// import SearchBar from './influencer/SearchInfluencer';



class NavBar extends Component {
	state = {
		logged: "",
		user: "",
		userLogged: "",
	}

	static contextType = UserContext;

	showSettings (event) {
		event.preventDefault();

	  }
	adjustState = () => {
		this.setState({
				logged: this.props.islogged,
				user: this.props.user
		})
	}
	componentDidMount = () => {
		this.adjustState();
		this.setState({userLogged:this.context.user})
	}


	render() {
		const {userLogged} = this.state;
		
		return(
			// <div className="nav-bar-background">
			/* <MediaQuery maxDeviceWidth={490}>
			<PhoneNavBar loggedIn={false}></PhoneNavBar>


			</MediaQuery>
			<MediaQuery minDeviceWidth={700}> */

			<Navbar fixed="top" bg="white" expand="lg">
  			<Navbar.Brand href="/">
			  <img id="logo-rebound" src={Logo} />						
			  </Navbar.Brand>
  			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
    		<Nav className="ml-auto">
      			<Nav.Link href="/">HOME</Nav.Link>
      			<Nav.Link href="/rebound-talks">PODCAST</Nav.Link>
      			<Nav.Link href="/about">ABOUT US</Nav.Link>
      			<Nav.Link href="/contact-us">CONTACT</Nav.Link>

    		</Nav>
  			</Navbar.Collapse>
			</Navbar>

				/* <div className="nav-bar">
					<div className="navbar-section">
						<img id="logo-rebound" src={Logo} />						
						<Link href="/">
							<span>
								<p>HOME</p>
							</span>
						</Link>
						<Link href="/rebound-talks">
							<span>
								<p>PODCASTS</p>
							</span>
						</Link>
						<Link href="/about">
						<span>
							<p>ABOUT US</p>
						</span>
						</Link>
						<Link href="/contact-us">
						<span>
							<p>CONTACT</p>
						</span>
						</Link>
					</div>						
				</div> */
			// 	</MediaQuery>
			// </div>
		);
}
}


export default NavBar;