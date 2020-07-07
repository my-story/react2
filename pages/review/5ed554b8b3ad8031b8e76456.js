import React, { Component } from 'react';
import * as toastr from 'toastr';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {FacebookShareButton, TwitterShareButton,  WhatsappShareButton} from "react-share";
import ReviewServices from '../../services/ReviewServices';
import InfluencerServices from '../../services/InfluencerServices';
import UserContext from '../../components/contexts/UserContext';
import Votes from '../../components/votes/Votes';
import SurvivalKit from '../../components/survivalKit/SurvivalKit';
import TechniqueKit from '../../components/survivalKit/TechniqueKit';
import KitCard from '../../components/survivalKit/KitCard';
import KitServices from '../../services/KitServices';

class ReviewOne extends Component {
  
  state = {
    influencers: [],
    review: {},
    kit: {},
    disableVoteButtons: false,
    update: false,
    kits:[]
  }

  static contextType = UserContext;

  componentDidMount() {
    this.fetchInfluencer();
    this.fetchKits();

    // const { id } = this.props;

    ReviewServices.getReview("5ed554b8b3ad8031b8e76456")
      .then((review) => {
        this.setState({
          review: review
        })
      })
      .catch(() => toastr.error('Error occured while fetching. Please try later.'));
      
      this.getkit()
  }

  getkit = () => {
    KitServices.getKit("5ed554b8b3ad8031b8e76456")
      .then((kit) => {
          this.setState({
              kit: kit
          })
      })
      .catch(() => toastr.error('Error occured while fetching. Please try later.'));
  }

  fetchKits = () => {
    KitServices.getLast()
      .then(kits => this.setState({kits}))
      .catch((err) => console.log(err))
  };

  fetchInfluencer = () => {
    InfluencerServices.getAll()
      .then(influencers => this.setState({
        ...this.state,
        influencers
      }))
      .catch((err) => console.log(err))
  }
  
  update = () => {
    this.setState({
      update: true
    })
  }


  upvote = () => {
    if (!this.context.islogged) {
      return toastr.info('You must be logged in to leave vote.');
    }

    if (!this.state.disableVoteButtons) {
      this.setState({ disableVoteButtons: true });
      if (this.isUpvoted()) {
        ReviewServices.undoVoteUp(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);

              return {
                review: { ...state.review, upvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      } else {
        ReviewServices.voteUp(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);
              const upvotes = state.review.upvotes
                .filter(upvote => upvote.author !== this.context.user._id)
                .concat({ author: this.context.user._id });

              return {
                review: { ...state.review, downvotes, upvotes },
                disableVoteButtons: false,
                upvoted: true
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      }
    }
  }

  downvote = () => {
    if (!this.context.islogged) {
      return toastr.info('You must be logged in to leave vote.');
    }

    if (!this.state.disableVoteButtons) {
      this.setState({ disableVoteButtons: true });
      if (this.isDownvoted()) {
        ReviewServices.undoVoteDown(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const downvotes = state.review.downvotes.filter(downvote => downvote.author !== this.context.user._id);

              return {
                review: { ...state.review, downvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      } else {
        ReviewServices.voteDown(this.state.review.influencer._id, this.context.user._id)
          .then(() => {
            this.setState(state => {
              const upvotes = state.review.upvotes.filter(upvote => upvote.author !== this.context.user._id);
              const downvotes = state.review.downvotes
                .filter(downvote => downvote.author !== this.context.user._id)
                .concat({ author: this.context.user._id });

              return {
                review: { ...state.review, downvotes, upvotes },
                disableVoteButtons: false
              }
            });
          })
          .catch(() => {
            toastr.error('Internal server error');
            this.setState({ disableVoteButtons: false });
          });
      }
    }
  }


  isDownvoted = () => this.state.review.downvotes && this.state.review.downvotes.find(vote => vote.author === this.context.user._id);

  isUpvoted = () => this.state.review.upvotes && this.state.review.upvotes.find(vote => vote.author === this.context.user._id);

  votes = () => {
    if (this.state.review.upvotes && this.state.review.downvotes) {
      return this.state.review.upvotes.length - this.state.review.downvotes.length;
    } else {
      return 0;
    }
  };

  audioDraw = () => {
    const {review} = this.state;

    if (this.state.review.voicenote === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
            <audio ref="audio_tag" src={review.voicenote} controls/>
        </div>
      )
    };
  };

  videoDraw = () => {

    if (this.state.review.video === "") {
      return(
        <div></div>
      )
    } else {
      return(
        <div>
          <iframe src={'https://www.youtube.com/embed/E7wJTI-1dvQ'}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            className='video-youtube' 
          />
        </div>
      )
    };
  };



  render() {
    const influencer = this.state.review.influencer || {};
    const {kits , kit, influencers, review} = this.state;


    if(this.state.kit === {} || this.state.kit.tips === undefined || this.state.kit.techniques === undefined || this.state.review.influencer === undefined){
      return(
        <div>
          <p>Loadingg........</p>
        </div>
      )
    } else {
        return (

        <div className="review-outer-page">
          <div className="review-page">
            <div>
              <div className="review-heading-div">
                <img src={influencer.profilePic} alt="Expert Image" className="influencer-pic" />
                <p className="heading" >{kit.title}</p>
              </div>
              <div className="subheading">
                <div className="category-name">
                  <p className="author">{influencer.name && influencer.name.firstName + ' ' + influencer.name.lastName}</p>
        
              <span id="category-bubble-review">Athlete</span>
                  
                </div>
                <div className="profile-instagram">
                  <p className="profile-name">{influencer.name && influencer.name.firstName}'s profile</p>
                  <img  className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram"/>
                </div>
              </div>
                <div>
                  {this.videoDraw()}
                </div>
          </div>

          <div>
            <div className="survival-kit-section">
            <h5>Few words about {influencer.name && influencer.name.firstName}</h5>
              <p>
               {influencer.description}
              </p>
              </div>
              <section className="survival-habits-heading">
                <button className="clicked-show">SURVIVAL KITS</button>
              </section>
              
              {/* <div> */}
              <div className="product-kit-page">
                <h1>Curiosita</h1>
                <p>Leonardo had an insatiable curiosity and was unrelenting
in his quest to keep learning, knowing and growing. 
<span style={{color: "#ff0000"}}> He
focused his life singularly on the search for truth and beauty,
and had an intense desire to understand how everything
worked, from why a bird could fly, to why we see lightning
before we hear thunder.</span> 
Curiosita requires that you constantly ask great questions
at the heart of important quality-of-life issues, then search
intensely for answers.</p>
                <TechniqueKit technique={kit.techniques[0]} kit={kit}></TechniqueKit>
                <TechniqueKit technique={kit.techniques[1]} kit={kit}></TechniqueKit>
                <TechniqueKit technique={kit.techniques[2]} kit={kit}></TechniqueKit>


              </div>
                {/* <SurvivalKit id={kit._id}></SurvivalKit> */}
              {/* </div> */}
                
            </div>              
            <div className="books-section">
                <h2>BOOKS</h2>
                <div className="book-container">
                  <div className="book-card">
                    <img height="auto" width="100%" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                    {/* <p><b>The Happiness Hypothesis: Jonathan Haidt</b></p> */}
                    <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                  </div>
                  {/* <div className="book-card">
                    <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                    <p><b>Title of Book</b></p>
                    <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                  </div>
                  <div className="book-card">
                    <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                    <p><b>Title of Book fwefwe </b></p>
                    <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                  </div>
                  <div className="book-card">
                    <img height="150" width="auto" src="https://prodimage.images-bn.com/pimages/9780802125088_p0_v6_s550x406.jpg" alt="Book" />
                    <p><b>Title of Book www  wef</b></p>
                    <button className="book-button add-to-cart"><b>Buy on Amazon</b></button>
                  </div> */}
  
                  
                 </div>
              </div>
            <div className="bottom-review-container">
              <Votes
                isDownvoted={this.isDownvoted()}
                isUpvoted={this.isUpvoted()}
                votes={this.votes()}
                voteDown={this.downvote}
                voteUp={this.upvote}
              />
              <div className="share-buttons">
                <span className="share-text">SHARE</span>
                <WhatsappShareButton url={"zapos.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565290822/instagram.svg" alt="instagram button"/></WhatsappShareButton>
                <FacebookShareButton url={"headspace.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411204/facebook.svg" alt="facebook button"/></FacebookShareButton>
                <TwitterShareButton url={"amazon.com"}><img className="instagram" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566411510/twitter.svg" alt="twitter button"/></TwitterShareButton>
              </div>
              </div>
              {/* <CartBubble product={product}/> */}
            </div>
            <div className="expert-card-section-review">
            <h2><b>Similar Sages</b></h2>
            <div className="kits-all-section">
                {kits.map((i, index) => {
                return (
                    <KitCard kit={i} key={index}/>
                )
                })}
              </div>

          </div>
          </div>
      );
      } 
      }
}

export default ReviewOne;