import React, { Component } from 'react';
import Link from 'next/link';
import PodcastServices from '../services/PodcastServices';
import PodcastCard from '../components/podcast/PodcastCard';
import CategoryBubbleOne from '../components/category/CategoryBubbleOne';
import { Input } from 'antd';


class Podcasts extends Component {
  state = {
    podcasts: [],
    category: [
      "All","Sports", "Music", "Tech", "Clothes"
    ],
  };


  fetchPodcasts = () => {
    PodcastServices.getAll()
    .then((podcasts) => this.setState({
      ...this.state,
      podcasts
    }))
    .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchPodcasts();
  };

  searchBar = (e) => {
    if(e === "All"){
      this.fetchPodcasts()
    } else {
      PodcastServices.searchPodcast(e)
      .then((podcasts) => this.setState({ podcasts }))
      .catch((err) => console.log(err))
    }
  };
  
  render() {
    const {podcasts , category} = this.state;
    console.log(podcasts);

    return (
        <div className="podcast-all-page">
          <div className="podcast-title-div">
            <h1><b>Rebound Talks</b></h1>
            <p>Have you ever wondered why some people grow after setbacks and some don’t? We are college students obsessed with answering this question. We created this podcast to hunt down the best tools, tips, and techniques to overcome the unique adversity that college students regularly face.</p>
            <div className="subscribe-div">
              <a  href="https://podcasts.apple.com/us/podcast/the-rebound-talks/id1511330975" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/itunes-logo-podcast.png" alt="itunes-logo" /></a>
              <a href="https://open.spotify.com/show/25dIWTvKIYcbPdssLu0e8M" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145464/spotify-logo-black-png-4.png" alt="spotify-logo" /></a>
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9yZWJvdW5kdGFsa3MubGlic3luLmNvbS9yc3M?ved=2ahUKEwiYhubH37vqAhUtTjABHeH-D90Q4aUDegQIARAC" target="_blank"><img className="podcast-subscribe" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1594145439/Google_Podcasts_Logo.png" alt="itunes-logo" /></a>
            </div>
            <div className="email-div">
              <div className="email-box">
              <p>Get the new episodes and exclusive tips/tools and techniques</p>
              <Input name="email" placeholder="Subscribe to our newsletter" id="input-newsletter" allowClear onChange={this.onChange} />
              </div>

            </div>
          </div>
            <div className="category-bar"> 
            {/* <p><b className="all-categories-p">All Categories: </b></p> */}
            <div className="bar-categories-div">
              {category.map((category, index) => {
                return (
                  <div>
                    <CategoryBubbleOne searchbar={this.searchBar} category={category}></CategoryBubbleOne>
                  </div>
                )
               })}
            </div>
          </div>
          <div>
            {podcasts.map((podcast, index) => {
              
              return (
                // <Link prefetch href="podcast/[id]" as={`podcast/${podcast._id}`} key={index} >
                // <a>
                // <div>
                <PodcastCard podcast={podcast} index={index}></PodcastCard>
                // </div>
                // </Link>
              )
            })}
            </div>
        </div>
    )
 }
}

    

export default Podcasts;