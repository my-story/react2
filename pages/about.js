import React from 'react';

function About(){
    const height = window.innerHeight + 'px';

    return(
        <div className="about-page" height={height}>
			<div className="about-heading-div">
          	<div className="about-heading">
            	<span><b>We are in the quest for improving </b></span>
				<span><b>people's life and </b></span>
				<span style={{color:"#F66C4F"}}><b> overall experiences!</b></span>
         	</div>
			 </div>
          	<div className="about-description">
				<div className="description-about">
                <p>We do this by speaking with all kinds of world class performers ranging from award winning psychologists, to pro surfers, to best selling authors. We touch on uncomfortable subjects like human adversities. And we figure out what tips, tools, and techniques they have gathered along their joruney to overcome their own mental barriers. Luckily, they have decided to share their insights with you so that you can unlock your true potential. The journey starts now! It will take effort and sacrifice, but hey, what easy comes easy goes.</p>
				</div>
			</div>
        	{/* <div className="video-section">
          		<div className="video-message">
					<h1><b>What is it all about?</b></h1>
					<p>Why wouldn't you trust the best of the best? <br></br></p>
					<span><b>Watch a short video about us</b></span>
          		</div>
				<div id="video-about-us-container">
					<input type="image" id="video-start" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566406923/btn.svg" />
					<img id="about-us-video" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566405071/Video.png" alt="video-about-us"/>
				</div>
        	</div> */}
			
					<div className="about-who-are-we">
						<div className="who-title">
							<div >
							<h2 id="who-are-we"><b>Who are we?</b></h2>
						
	
							<p>We are Rebound, a company founded by two college students Antonio & Sebastian. Noticing how many of their friends turned into alcohol, marijuana, excessive eating, or other harmful habits to escape university life stresses. Experiencing firsthand what improper handling of life’s problems could do to a person and looking at the growing mental health epidemic. They felt the DUTY to do something about it and decided to hunt down the best tools, tips, and techniques that people can use to rebound from their adversities and become their best selves.</p>
							</div>
						</div>
						<div className="about-workers-container">
							<div className="about-workers-card">
								<div><img id="about-picture" alt="Sebastian Grossmann" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1605125679/Untitled_design_1.png"/></div>
								<div className="about-worker-name">
									<h1>Sebastian Grossmann</h1>
									<p>Founder</p>
								</div>
							</div>

							<div className="about-workers-card">
								<div><img id="about-picture" alt="Antonio Colmenares" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1605125681/Untitled_design_2.png"/></div>
								<div className="about-worker-name">
									<h1>Antonio Colmenares</h1>
									<p>Founder</p>
								</div>
							</div>
						</div>
					</div>
				{/* <div className="about-donate-container">
        			<div className="about-donate-section">
          			<div className="donate-message">
            			<h2>Want to help us with<br></br>growing up and scaling?</h2>
            <p>We’ll appreciate your help and involvement!.</p>
              <div className="donate-buttons">
              <p>Donate</p>
              </div>
          </div>
          <div> 
            <img id="donate-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566410262/Screenshot_from_2019-08-21_13-57-13.png" alt="donate-picture-logo"/>
          </div>
        </div>
		</div> */}
		
        </div>
    )
}

export default About;