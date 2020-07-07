import React, { Component } from 'react';
import Link from 'next/link';
import PodcastServices from '../../services/PodcastServices';

class PodcastCard extends Component {

    state = {
        // podcast: ""
    }

    // componentDidMount() {
    //     this.setState({podcast: this.props.podcast})
    // }

    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
    
            if (length > 170){
                return(
                    <p>{p.substring(0,170)} ...</p>
                )
            } else {
               return(
                   <p>{p}</p>
               )
            }
        
    };

    render() {
        // const {podcast} = this.props;

        console.log(this.props.podcast._id);

        // if (podcast === ""){
        //     return(<div></div>)
        // } else {
            return (
                <Link href="/podcast/[id]" as={`/podcast/${this.props.podcast._id}`} key={this.props.index} prefetch>
                <div className="podcast-outer-card">
                    <div className="podcast-image-div">
                        <img id="podcast-thumbnail-image" src={this.props.podcast.image} alt="Podcast Thumbnail" />
                    </div>
                    <div className="podcast-information">
                        <div className="podcast-heading-div">
                            <h2><b>{this.props.podcast.influencer.name.firstName} {this.props.podcast.influencer.name.lastName}</b></h2>
                            <p>{this.props.podcast.time}</p>
                        </div>
                        <div className="podcast-description-div">
                        <p>{this.props.podcast.title}</p>
                        {/* <p>{podcast.description}</p> */}
                        {this.shrinkParagraph(this.props.podcast.description)}
                        </div>
                    </div>
                </div>
                </Link>
            );
        

    }
}

export default PodcastCard;