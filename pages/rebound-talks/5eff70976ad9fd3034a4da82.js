import React, { Component } from "react";
import PodcastServices from "../../services/PodcastServices";
import KitServices from "../../services/KitServices";
// import SurvivalKit from "../../components/survivalKit/SurvivalKit";
import KitCard from "../../components/survivalKit/KitCard";
import Iframe from 'react-iframe';
import {FacebookShareButton, TwitterShareButton,  WhatsappShareButton} from "react-share";
import EmailBox from "../../components/email/EmailBox";
import Link from "next/link";


class PodcastDetail extends Component {
    state = {
        podcast: "",
        kits: "",
        height: 0,
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
        this.setState({height: window.innerHeight + 'px'});

    };

    render(){
        const {podcast, height} = this.state;
        

        // console.log(url);
   

        if (podcast === "" || this.state.kits === "") {
            return(<div></div>)
        } else {
            return(
                <div className="podcast-detail-page" height={height}>

                    <div className="podcast-header-div">
                        <div className="podcast-categories">
                            <p id="categories-podcast">#Categories </p>
                            <p id="categories-podcast">#Categories </p>
                            </div>
                            <h1>{podcast.title}</h1>
                        <div className="name-and-share">
                            <div className="name-share-text">
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
                    <Iframe url="//html5-player.libsyn.com/embed/episode/id/14252078/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
                            width="80%"
                            height="95px"
                            className="podcast-embed"
                            display="initial"
                            position="relative"/>
                    <div className="subscribe-podcast">
                    
                        <p><b>Subscribe on</b></p>
                        <a  href="https://podcasts.apple.com/us/podcast/the-rebound-talks/id1511330975" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/itunes-logo-podcast.png" alt="itunes-logo" /></a>
                        <a href="https://open.spotify.com/show/25dIWTvKIYcbPdssLu0e8M" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145464/spotify-logo-black-png-4.png" alt="spotify-logo" /></a>
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9yZWJvdW5kdGFsa3MubGlic3luLmNvbS9yc3M?ved=2ahUKEwiYhubH37vqAhUtTjABHeH-D90Q4aUDegQIARAC" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/Google_Podcasts_Logo.png" alt="itunes-logo" /></a>
                    </div>
                     <hr className="line-after-subscribe"></hr>

                
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
                        <ul className="show-notes-ul">
                            <li>Edtudio del q tal <a href="google.com">Hola</a></li>
                            <li>Libro de Pennebaker</li>
                            <li>Supiste ? metele</li>
                        </ul>
                        </div>
                    <div className="container-subscribe-podcast-recommendation">
                    <div className="container-subscribe">
                    <div className="subscribe-div">
                        <h2>Subscribe</h2>
                        <p>We send our community the best tools to overcome any adversity. With the help of experts of different fields, we experiment with top of the line solutions to everyday problems.</p>
                    </div>
                    <div className="subscribe-detail-div">
                    <EmailBox></EmailBox>
                    </div>
                    </div>
                    <div className="podcast-recomendation">
                        <h3><b>Popular Podcasts</b></h3>
                        <div className="box-recomendation">
                        <Link href=""><p>Jonathan Haidt - Testing el name para que sea un pelo largo, aqui viene (#1)</p></Link>
                        <hr id="white-line"></hr>
                        <Link href=""><p>Jonathan Haidt - Testing el name para que sea un pelo largo, aqui viene (#1)</p></Link>
                        <hr id="white-line"></hr>
                        <Link href=""><p>Jonathan Haidt - Testing el name para que sea un pelo largo, aqui viene (#1)</p></Link>
                        
                        </div>
                    </div>

                    </div>
 
                </div>
            )
        }
    }
}

export default PodcastDetail