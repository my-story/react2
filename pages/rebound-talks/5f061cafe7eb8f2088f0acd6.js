import React, { Component } from "react";
import PodcastServices from "../../services/PodcastServices";
// import KitServices from "../../services/KitServices";
// import SurvivalKit from "../../components/survivalKit/SurvivalKit";
import Iframe from 'react-iframe';
import {FacebookShareButton, TwitterShareButton,  WhatsappShareButton} from "react-share";
import EmailBox from "../../components/email/EmailBox";
import Link from "next/link";
import {Helmet} from 'react-helmet';
// import {window} from 'global';



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
        
        PodcastServices.getOne("5f061cafe7eb8f2088f0acd6")
            .then((podcast) => {
                this.setState({podcast})
                //
            })
            .catch((err) => console.log(err))
    };



    componentDidMount() {
        this.fetchPodcast();
        this.setState({height: window.innerHeight + 'px'});

    };

    render(){
        const {podcast, height} = this.state;
        

        // console.log(url);
   

        if (podcast === ""  ) {
            return(<div></div>)
        } else {
            return(
                <div className="podcast-detail-page" height={height}>
                    <Helmet>
                    <meta charSet="utf-8" />
                    <title>Rebound Talks Podcast</title>
                    <link rel="canonical" href={`https://reboundwithus.com/rebound-talks/${podcast._id}`} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="shortcut icon" href="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584463817/ReboundIconSquare-01.png" type="image/x-icon"></link>
                    </Helmet>

                    <div className="podcast-header-div">
                        <div className="podcast-categories">
                            <p id="categories-podcast">#Productivity </p>
                            <p id="categories-podcast">#Indistractable </p>
                            <p id="categories-podcast">#Psychology </p>
                            <p id="categories-podcast">#Habits </p>


                            </div>
                            <h1>{podcast.title}</h1>
                        <div className="name-and-share">
                            <div className="name-share-text">
                                <h2>{podcast.influencer.name.firstName} {podcast.influencer.name.lastName} | {podcast.time}</h2>
                            </div>
                            <div className="share-div">
                                <p>Share</p>
                                <WhatsappShareButton url={`www.reboundwithus.com/rebound-talks/${podcast._id}`}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram button"/></WhatsappShareButton>
                                <FacebookShareButton url={`www.reboundwithus.com/rebound-talks/${podcast._id}`}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg" alt="facebook button"/></FacebookShareButton>
                                <TwitterShareButton url={`www.reboundwithus.com/rebound-talks/${podcast._id}`}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg" alt="twitter button"/></TwitterShareButton>
                            </div>
                        </div>
                    </div>
                    <Iframe url="//html5-player.libsyn.com/embed/episode/id/14437283/height/90/theme/custom/thumbnail/yes/direction/backward/render-playlist/no/custom-color/87A93A/"
                            width="80%"
                            height="95px"
                            className="podcast-embed"
                            display="initial"
                            position="relative"/>
                    <div className="subscribe-podcast">
                    
                        <p><b>Subscribe on</b></p>
                        <a href="https://podcasts.apple.com/us/podcast/the-rebound-talks/id1511330975" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/itunes-logo-podcast.png" alt="itunes-logo" /></a>
                        <a href="https://open.spotify.com/show/25dIWTvKIYcbPdssLu0e8M" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145464/spotify-logo-black-png-4.png" alt="spotify-logo" /></a>
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9yZWJvdW5kdGFsa3MubGlic3luLmNvbS9yc3M?ved=2ahUKEwiYhubH37vqAhUtTjABHeH-D90Q4aUDegQIARAC" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/Google_Podcasts_Logo.png" alt="itunes-logo" /></a>
                    </div>
                     <hr className="line-after-subscribe"></hr>

                
                    <div className="podcast-detail-description-div">
                        <p>{podcast.description}</p>
    
                    </div>
   
                    {/* <div className="show-notes-div">
                        <h2>Show notes:</h2>
                        <ul className="show-notes-ul">
                            <li>Edtudio del q tal <a href="google.com">Hola</a></li>
                            <li>Libro de Pennebaker</li>
                            <li>Supiste ? metele</li>
                        </ul>
                        </div> */}

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
                        <Link href="/rebound-talks/[id]" as={`/rebound-talks/5f73b7e33455541f38e4cdcc`}><p><b>Donald Robertson</b> - How Stoic Philosophy Can Change Your Life (#22)</p></Link>
                        <hr id="white-line"></hr>
                        <Link href="/rebound-talks/[id]" as={`/rebound-talks/5f73b52c3455541f38e4cdc6`}><p><b>Robert Greene </b> - Irrationality, Death, and Fate (#21)</p></Link>
                        <hr id="white-line"></hr>
                        <Link href="/rebound-talks/[id]" as={`/rebound-talks/5f061cafe7eb8f2088f0acd6`}><p><b>Nir Eyal</b> - How to Become Indistractable, Take Control of Your Focus, and Re-shape Your Life (#2)</p></Link>
                        </div>
                    </div>

                    </div>
 
                </div>
            )
        }
    }
}

export default PodcastDetail