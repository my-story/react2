import React, { Component } from 'react';

class Votes extends Component {
  render(){
    if (this.props.isUpvoted){
      return(
        <div className="votes-container">
          <input type="image" className="upvoted" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567009114/arrow_copy.svg" alt="upvote" onClick={this.props.voteUp} />
          <span className="votes">{this.props.votes}</span>
          <input type="image" className="downvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567008840/arrow_copy_2.svg" alt="downvote" onClick={this.props.voteDown}/>
        </div>
      )
    } else if (this.props.isDownvoted){
      return(
        <div className="votes-container">
          <input type="image" className="upvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567008840/arrow_copy_2.svg" alt="upvote" onClick={this.props.voteUp} />
          <span className="votes">{this.props.votes}</span>
          <input type="image" className="downvoted" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567009114/arrow_copy.svg" alt="downvote" onClick={this.props.voteDown}/>
        </div>
      )
    } else {
      return(
        <div className="votes-container">
          <input type="image" className="upvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567008840/arrow_copy_2.svg" alt="upvote" onClick={this.props.voteUp} />
          <span className="votes">{this.props.votes}</span>
          <input type="image" className="downvote" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1567008840/arrow_copy_2.svg" alt="downvote" onClick={this.props.voteDown}/>
        </div>
      )
    }
  }
}

export default Votes;