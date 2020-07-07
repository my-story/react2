import React, { Component } from 'react';
// import Slider from "react-slick";
import Link from 'next/link';
import Router from 'next/router';
import {Helmet} from 'react-helmet';
import InfluencerServices from '../services/InfluencerServices';
import SearchBar from '../components/influencer/SearchInfluencer';
import CategoryBubbleOne from '../components/category/CategoryBubbleOne';
// import InfluencerItem from "../src/components/influencer/InfluencerItem";
// import InfluencerCard from '../components/influencer/InfluencerCard';
import KitServices from '../services/KitServices';
import Modal from "react-responsive-modal";
import KitMap from '../components/survivalKit/KitMap';


class InfluencerList extends Component {
  state = {
    category: [
      "All", "Addiction","Cognitive Skills", "Spirituality"
    ],
    search_expert:[],
    open: false
  }




  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, category, kits } = this.state

      return (
        <div className="index-page">
          <Helmet>
          <meta charSet="utf-8" />
          <title>Rebound Sages</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="shortcut icon" href="https://img.icons8.com/ios-filled/64/000000/circled-down.png" type="image/x-icon"></link>
          </Helmet>
          <div className="expert-section">
            <div className="expert-div">
            <div className="expert-message">
              <p> Find the tools to overcome your adversities.</p>
              <div className="expert-message-p-div">
              <p id="expert-message-description">
              We talk to professionals that have dealt with tremendous adversity, and find out what tips, 
              techniques and products they used especifically for overcoming that problem.
              </p>
              </div>
             <Link href="podcasts"><button id="survival-kit-button">SEE ALL PODCASTS</button></Link> 
            </div>
              {/* <img id="expert-illustration" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380238/3260_Converted.png" alt="expert illustration" /> */}
              {/* <img className="background-blue-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380557/Bitmap_Copy.png" alt="blue-dash"/> */}
            </div>
            
          </div>
          {/* <h2 style={{paddingBottom: "20px", textAlign:"center"}}><b>Top Survival Kits</b></h2> */}
          {/* <KitMap></KitMap> */}
          <div className="index-best-book-div">
              <div className="best-book-header">
                <h1>This Week's Podcast</h1>
              </div>
              <div className="best-book-info-div">
                <div className="best-book-pictures">
                  {/* <img id="best-book-cover" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1590513128/Ep._1_4.png" alt="Book Cover" /> */}
                  <img id="podcast-guest" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/James_Arthur_Ray_2017.jpg" alt="Author Picture" />
                </div>
                <div className="best-book-title-div">
                  <h2>The Alchemist, 25th Anniversary: A Fable About Following Your Dream </h2>
                  <p id="best-author-p">Paulo Coelho | #86 in Books on Amazon</p>
                  <p id="best-description-p">
                  Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago.
                  </p>
                  <button>Listen Now</button>
                </div>
              </div>
              {/* <span id="see-all-podcast"><a href="/podcasts">See All Podcast</a></span> */}
             <Link href="podcasts"><button id="survival-kit-button2">SEE ALL PODCASTS</button></Link> 

              </div>
  
          <div className="top-categories">
            <h2><b>Top Categories</b></h2>
            <div className="categories-container">
            <Link href={{ pathname: '/kits', query: { info: 'Addiction' } }}>
              <div id="categories-card">
                <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790965/icons8-sport-96_1.png" alt="category" /></div>
                <p><b>Addiction</b></p>
                <div id="dash-under"></div>
              </div>
            </Link>
            <Link href={{ pathname: '/kits', query: { info: 'Cognitive Skills' } }}>
              <div id="categories-card">
                <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790640/icons8-paragraph-96_1.png" alt="category" /></div>             
                <p><b>Cognitive Skills</b></p>
                <div id="dash-under"></div>
              </div>
            </Link>
            <Link href={{ pathname: '/kits', query: { info: 'Spirituality' } }}>
              <div id="categories-card">
                <div id="blue-dash"><img id="category-on-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567790797/icons8-comedy-100_2.png" alt="category" /></div>              
                <p><b>Spirituality</b></p>
                <div id="dash-under"></div>
              </div>
            </Link>
            </div>
          </div>
          <div className="category-bar-index"> 
            {/* <p><b className="all-categories-p">All Categories: </b></p> */}
            <div className="bar-categories-div">
              {category.map((category, index) => {
                return (
                  <Link href={{ pathname: '/kits', query: { info: category } }}>
                    <span key={index} className="category-bubble" title={category}>{category}</span>
                  </Link>
                )
               })}
            </div>
          </div>
  
              <div className="index-best-book-div">
              <div className="best-book-header">
                <h1>The Best Book This Week</h1>
              </div>
              <div className="best-book-info-div">
                <div className="best-book-pictures">
                  <img id="best-book-cover" src="https://miro.medium.com/max/3000/1*r6rpoanJHbvwZpSW7mZjzg.jpeg" alt="Book Cover" />
                  <img id="best-book-author" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Robert_Greene_B%26W.jpg" alt="Author Picture" />
                </div>
                <div className="best-book-title-div">
                  <h2>The Alchemist, 25th Anniversary: A Fable About Following Your Dream </h2>
                  <p id="best-author-p">Paulo Coelho | #86 in Books on Amazon</p>
                  <p id="best-description-p">
                  Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago.
                  </p>
                  <button>Get the Book</button>
                </div>
              </div>
  
              </div>

              <div className="heyhey-expert">
            
            <img id="absurd-question-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1583447725/05.png" />
            <div className="heyhey-message">
              <div className="hey-message-div">
              <h1>Hey! Your opinion really matters to us.</h1>
              <p>Feel free to let us know what you feel about the website, or any Survival Tips you would like to see.</p>
              </div>
              {/* <button><b>Share an opinion</b></button> */}
              <div> 
                <button onClick={this.onOpenModal}><b>Share an opinion</b></button>
                <Modal id="pop-up-css" className="modal" open={open} onClose={this.onCloseModal} center>
                  <div className="heading-pop-up">
                  <h2><b>Share your opinion</b></h2>
                  <p>We greatly appreciate you feedback!</p>
                  </div>
                  <ol className="questions-pop-up">
                    <li id="question-modal">Have you enjoyed the overall experience of the application?</li>
                    <div id="number-bar" className="btn-group mr-2" role="group" aria-label="First group" clicked>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">1</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">2</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">3</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">4</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">5</button>
                      <button type="button" id="pop-up-bttn"className="btn btn-secondary">6</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">7</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">8</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">9</button>
                      <button type="button" id="pop-up-bttn" className="btn btn-secondary">10</button>
                    </div>
                    <li id="question-modal">Have you encountered any problems when using our site?</li>
                    <div className="yes-no">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                        <label class="form-check-label" for="exampleRadios1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" for="exampleRadios2">
                          No
                        </label>
                      </div>
                      </div>
                    <li id="question-modal">If you would like to see something improve in this page what would it be?</li>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </ol>
                  <div className="button-div">
                  <button className="feedback-submit-button"><span className="login-font">Submit</span></button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
  
          
        </div>
      )
    
  }
}

export default InfluencerList;