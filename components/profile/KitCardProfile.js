import React, { Component } from 'react';
import Link from 'next/link';
import KitServices from '../../services/KitServices';

class KitCardProfile extends Component {

    state= {
        kit: {},
    }

    componentDidMount = () => {
        // console.log(this.props)
        KitServices.getKitProfile(this.props.kit)
        // console.log(kit)
        .then((kit) => this.setState({kit}))
        .catch((err) => console.log(err))
    };

    render () {
        console.log(this.props.kit);

        if (!this.state.kit.influencer) {
            return(<div></div>)
        } else {
            return (
            <Link href="/review/[id]" as={`/review/${this.state.kit._id}`} prefetch>  
                <div className="expert-card-container-profile">
                    <div className="expert-card-picture-div">
                        <img className="expert-card-picture-round" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1583176290/simon-migaj-b2qszO9C7sw-unsplash.jpg" alt="Sage picture" />
                    </div>
                    <div className="expert-card-name">
                
                        <img id="expert-profile-pic-card" src={this.state.kit.influencer.profilePic} /> 
                   
                    <div className="expert-card-name-survival">
                        <div>
                            <div id="card-kit-title"><b>{this.state.kit.title}</b></div>
                        </div>
                        <div id="card-kit-name">
                            {this.state.kit.influencer.name.firstName} {this.state.kit.influencer.name.lastName}
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                )
        }

    }
}

export default KitCardProfile;