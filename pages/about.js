import React from 'react';

function About(){
    return(
        <div className="about-page">
          	<div className="about-heading">
            	<div>
            	<span><b>We are in the quest for improving</b></span>
            	</div>
            	<div id="overall-expirience"> 
       				<span><b>people's life and</b></span><span style={{color:"#F66C4F"}}><b> overall experiences!</b></span>
            	</div>
         	</div>
          	<div className="about-description">
				<div className="description">
                <p>We do this by handpicking specific experts and asking them for a product, place, experience, etc., which has helped them personally be successful in their careers and achieve their goals. Luckily, they have decided to share their insights with you so that you can unlock your true potential</p>
				</div>
			</div>
        	<div className="video-section">
          		<div className="video-message">
					<h1><b>What is it all about?</b></h1>
					<p>Why wouldn't you trust the best of the best? <br></br></p>
					<span><b>Watch a short video about us</b></span>
          		</div>
				<div id="video-about-us-container">
					<input type="image" id="video-start" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566406923/btn.svg" />
					<img id="about-us-video" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566405071/Video.png" alt="video-about-us"/>
				</div>
        	</div>
			
					<div className="about-who-are-we">
						<div id="who-title"><span><b>Who are we?</b></span></div>
						<div id="who-description"><span>Few words about your team and corporate values. Lorem ipsum dolor. Few words about your team and corporate values. Lorem ipsum dolor.</span></div>
						<div className="about-workers-container">
							<div className="about-workers-card">
								<div><img id="about-picture" alt="Sages" src="https://fsmedia.imgix.net/d9/6a/5a/bb/4e8f/478d/b2b2/7cb996c00019/heres-a-recap-of-elon-musks-crazy-2015.jpeg"/></div>
								<div className="about-worker-name">
									<h1>Sebastian Grossmann</h1>
									<p>Co-founder</p>
								</div>
							</div>

							<div className="about-workers-card">
								<div><img id="about-picture" alt="Sages" src="https://fsmedia.imgix.net/d9/6a/5a/bb/4e8f/478d/b2b2/7cb996c00019/heres-a-recap-of-elon-musks-crazy-2015.jpeg"/></div>
								<div className="about-worker-name">
									<h1>Antonio Colmenares</h1>
									<p>Co-founder</p>
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