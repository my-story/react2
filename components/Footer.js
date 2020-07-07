import React, {Component} from "react";
import Logo from '../public/images/reboundLogo01.png';
import Link from 'next/link';

class Footer extends Component{
  render(){
		return(
			<footer className="footer-container">
				<div className="logo-div">
					<div className="logo-copywrite">
					<img id="rebound-footer-logo" src={Logo} alt="Rebound-Logo"/>										
			
					<div className="logo-copywrite">
						<p>Copyright @ 2019 Rebound</p>
					</div>
					</div>
					<div className="nav-footer">
						<p>Experts</p>
						<p>Products</p>
						<p>About</p>
						<p>Contact</p>
					</div>
				</div>
				<div className="important-info">
				<Link href="/terms_conditions"><p>Terms & Conditions</p></Link>	
					<p>Privacy Policy</p>
					<p>Support</p>
					<p>Contact</p>
					{/* <p id="donate-footer">Donate</p> */}
				</div>	
			</footer>
			)
    }
}

export default Footer