import React, { Component } from "react";
import PodcastServices from "../../services/PodcastServices";
import KitServices from "../../services/KitServices";
// import SurvivalKit from "../../components/survivalKit/SurvivalKit";
import KitCard from "../../components/survivalKit/KitCard";
import Iframe from 'react-iframe';
import {FacebookShareButton, TwitterShareButton,  WhatsappShareButton} from "react-share";
import EmailBox from "../../components/email/EmailBox";


class PodcastDetail extends Component {
    state = {
        podcast: "",
        kits: ""
    }

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    fetchPodcast = () => {
        // const {id} = this.props;
        
        PodcastServices.getOne("5eff70976ad9fd3034a4da82")
            .then((podcast) => {
                this.setState({podcast})
                this.fetchKits(podcast.influencer._id)
            })
            .catch((err) => console.log(err))
    };

    fetchKits = (id) => {
        KitServices.getKits(id)
            .then((kits) => this.setState({kits}))
            .catch((err) => console.log(err))
    };

    componentDidMount() {
        this.fetchPodcast();
    };

    render(){
        const {podcast} = this.state;
        
        if (podcast === "" || this.state.kits === "") {
            return(<div></div>)
        } else {
            return(
                <div className="podcast-detail-page">
                    <Iframe url="//html5-player.libsyn.com/embed/episode/id/14252078/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
                            width="80%"
                            height="95px"
                            className="podcast-embed"
                            display="initial"
                            position="relative"/>

                    <div className="podcast-header-div">
                            <p id="categories-podcast">Categories </p>
                
                            <h1>{podcast.title}</h1>
                        <div className="name-and-share">
                            <div>
                                <h2>{podcast.influencer.name.firstName} {podcast.influencer.name.lastName} | {podcast.time}</h2>
                            </div>
                            <div className="share-div">
                                <p>Share</p>
                                <WhatsappShareButton url={"zapos.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram button"/></WhatsappShareButton>
                                <FacebookShareButton url={"headspace.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg" alt="facebook button"/></FacebookShareButton>
                                <TwitterShareButton url={"amazon.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg" alt="twitter button"/></TwitterShareButton>
                            </div>
                        </div>
                    </div>
                    <div className="podcast-detail-description-div">
                        <p>{podcast.description}</p>
                        <h2>Who is {podcast.influencer.name.firstName} {podcast.influencer.name.lastName} ?</h2>
                            <p>{podcast.influencer.description}</p>
                    </div>
                    {/* <div className="podcast-detail-kit-div">
                        <p id="survival-kit-word">SURVIVAL KITS</p>
                        <div className="kits-all-section">
                            {this.state.kits.map((i, index) => {
                                return (
                                    <KitCard kit={i} key={index}/>
                                )
                            })}
                        </div>
                    </div> */}
                    <div className="show-notes-div">
                        <h2>Show notes:</h2>
                        <ul>
                            <li>Edtudio del q tal</li>
                            <li>Libro de Pennebaker</li>
                            <li>Supiste ? metele</li>

                        </ul>
                    </div>
                    <div className="subscribe-div">
                        <h2>Subscribe</h2>
                        <p>We send our community the best tools to overcome any adversity. With the help of experts of different fields, we experiment with top of the line solutions to everyday problems.</p>
                        <EmailBox></EmailBox>
                    </div>
                </div>
            )
        }
    }
}

export default PodcastDetail