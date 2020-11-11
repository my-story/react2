import React, { Component } from 'react';
import Link from 'next/link';
import {Helmet} from 'react-helmet';
import Modal from "react-responsive-modal";
import MailerServices from '../services/MailerServices';
import Scroll from '../components/hook/Scroll';


class InfluencerList extends Component {
  state = {
    category: [
      "All","Psychology", "Productivity", "Wellness", "Spiritual", "Science", "X-Sports", "Sports" ,"Author" , "Coach" , "Stoicism" , "Marketing", 
    ],
    search_expert:[],
    height: 0,
    open: false,
    data: {
      message: ""
    }
  }




  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  componentDidMount = () => {
    this.setState({height: window.innerHeight + 'px'});
  }


  onChange = (e) => {
    let {data} = this.state; 
    data[e.target.name] = e.target.value
    this.setState({ data });
};

  // sendFeedback = () => {
  //   let {message} = this.state;

  //   MailerServices.sendFeedback(message)
  //   .then(() => toastr.success("Feeback sent!"))
  //   .catch(() => console.log("Error sending feedback"))

  // }

  render() {
    const { open, category, kits,height } = this.state

    console.log(this.state.data.message);



      return (
        <div className="index-page" height={height}>
          <Helmet>
          <meta charSet="utf-8" />
          <title>Rebound</title>
          <link rel="canonical" href="https://reboundwithus.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="shortcut icon" href="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584463817/ReboundIconSquare-01.png" type="image/x-icon"></link>
          <script>
    {(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1913965,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')}
</script>
          </Helmet>
          <div className="expert-section">
          

            <div className="expert-div">
            <div className="expert-message">
              <h1>Embrace your adversities.</h1>
              <div className="expert-message-p-div">
              <p id="expert-message-description">
              Rebound and Experts are creating 21-day guides for overcoming any adversity. 
              </p>
              </div>
             <Link href="rebound-talks"><button id="survival-kit-button">SEE ALL PODCASTS</button></Link> 
            </div>
              {/* <img id="expert-illustration" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380238/3260_Converted.png" alt="expert illustration" /> */}
              {/* <img className="background-blue-dash" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1565380557/Bitmap_Copy.png" alt="blue-dash"/> */}
            </div>
            
          </div>
          {/* <h2 style={{paddingBottom: "20px", textAlign:"center"}}><b>Top Survival Kits</b></h2> */}
          {/* <KitMap></KitMap> */}
          <div className="index-best-book-div">
              <div className="best-book-header">
                <h2>This Week's Podcast</h2>
              </div>
              <div className="best-book-info-div">
                <div className="best-book-pictures">
                  {/* <img id="best-book-cover" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1590513128/Ep._1_4.png" alt="Book Cover" /> */}
                  <img id="podcast-guest" src="https://www.gannett-cdn.com/-mm-/b5e83c6966dcbcdf15af31e199b90904c4b9f35a/c=0-2-765-1022/local/-/media/2018/05/04/USATODAY/USATODAY/636610323359764248-XXX-JUNOT-DIAZ-BOOKS-771.jpg?quality=50&width=640" alt="Author Picture" />
                </div>
                <div className="best-book-title-div">
                  <h2>Pulitzer Prize Winner Junot Díaz on Unprocessed Trauma, Purpose, and Art</h2>
                  <p id="best-author-p">Junot Diaz</p>
                  <p id="best-description-p">
                  Junot Díaz is a Dominican-American writer, creative writing professor at the Massachusetts Institute of Technology (MIT), and fiction editor at Boston Review. Central to Díaz's work is the immigrant experience, particularly the Latino immigrant experience. Diaz received the 2008 Pulitzer Prize for Fiction for his novel The Brief Wondrous Life of Oscar Wao, and received a MacArthur Fellowship "Genius Grant" in 2012.
                  </p>
                  <button>Listen Now</button>
                </div>
              </div>
              {/* <span id="see-all-podcast"><a href="/podcasts">See All Podcast</a></span> */}
             <Link href="rebound-talks"><button id="survival-kit-button2">SEE ALL PODCASTS</button></Link> 

              </div>
          <div className="top-categories">
  
              <h2><b>Rebound Talks Topics</b></h2>
              <div className="category-bar-index"> 
            {/* <p><b className="all-categories-p">All Categories: </b></p> */}
            <div className="bar-categories-div">
              {category.map((category, index) => {
                return (
                  <Link href={{ pathname: '/rebound-talks', query: { info: category } }}>
                    <span key={index} className="category-bubble" title={category}>{category}</span>
                  </Link>
                )
               })}
            </div>
          </div>

            
          </div>

  
              <div className="index-best-book-div-book">
              <div className="best-book-header">
                <h1>The Best Book This Week</h1>
              </div>
              <div className="best-book-info-div-book">
                <div className="best-book-pictures">
                  <img id="best-book-cover" src="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" alt="Book Cover" />
                  {/* <img id="best-book-author" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Robert_Greene_B%26W.jpg" alt="Author Picture" /> */}
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
{/* 
              <div className="heyhey-expert">
            
            <img id="absurd-question-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1583447725/05.png" />
            <div className="heyhey-message">
              <div className="hey-message-div">
              <h1>Hey! Your opinion really matters to us.</h1>
              <p>Feel free to let us know what you feel about the website, or any Survival Tips you would like to see.</p>
              </div>
              <button><b>Share an opinion</b></button>
              <div> 
                <button onClick={this.onOpenModal}><b>Share an opinion</b></button>
                <Modal id="pop-up-css" className="modal" open={open} onClose={this.onCloseModal} center>
                  <div className="heading-pop-up">
                  <h2><b>Share your opinion</b></h2>
                  <p>We greatly appreciate you feedback!</p>
                  </div>
                  <ol className="questions-pop-up">
                    <li id="question-modal">If you would like to see something improve in this page what would it be?</li>
                    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" onChange={this.onChange} ></textarea>
                  </ol>
                  <div className="button-div">
                  <button className="feedback-submit-button" onClick={this.sendFeedback()}><span className="login-font">Submit</span></button>
                  </div>
                </Modal>
              </div>
            </div>
          </div> */}
  
          <Scroll />
        </div>
      )
    
  }

}

export default InfluencerList;