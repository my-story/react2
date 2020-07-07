import React, { Component } from 'react';
import AuthServices from '../../services/AuthServices';

class TechniqueProfile extends Component {
    state = {
        technique : ""
    }

    componentDidMount() {
        this.setState({technique: this.props.technique})
    }

    unfavorite = () => {
        const { technique } = this.state;
        const {user} = this.props;
        
        AuthServices.unfavoriteTechnique(user._id, technique._id)
            .then(() => this.setState({technique: ""}))
            .catch((err) => console.log(err))
    };

    render() {
        const { technique } = this.state;
        if (technique === "") 
        {
            return(
                <div></div>
            )
        }
        else
        {
            return (
                <div className="technique-survival-kit-card">
                <div className="survival-card-image-div">
                    <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921481/TECHNIQUES_FONTGUIDEAsset_6_300x.png"/>
                </div>
                <div className="technique-kit-description-div">
                    <div className="technique-kit-name-category">
                        <p id="technique-name"><b>{technique.title}</b></p>
                        <div className="technique-with-category-div">
                        <p id="technique-word">Technique</p>
                        <span id="category-bubble-profile">Athlete</span>

                        </div>
                    </div>
                        {technique.subheading.map((t ,index) => {
                            if(t.descriptions.length > 0){
                                return(
                                    <div className="technique-kit-description-p">
                                        <div className="technique-header-div">
                                            <p><b>{t.header}</b></p>
                                        </div>
                                        {t.descriptions.map((description,index) => {
                                            
                                            return(
                                                <div key={index} className="technique-steps">
                                                <p>- {description}</p><br></br>
                                                {/* <p>- description</p><br></br>         */}
                                            </div>
                                            )
                                        })}
                    
                                    </div>
                                )
                            }
    
                        })}
       
                    </div>
                    {/* <div className="line-2"></div>
                    <div className="survival-prize-div">
                    <div className="survival-save-favorite">
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                        </div>
                        <p id="survival-prize">$150</p>
                        <button className="survival-kit-add-to-cart">Add to card</button>
                    </div> */}
                            <div className="line-2"></div>
                        <div className="technique-survival-prize-div">
                        <div className="survival-save-favorite">
                            <img onClick={this.unfavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584740221/icons8-close-window-32.png" alt="bookmark" />     
                        </div>
                            
                        </div>
                </div>
            );
        }
        
    }
}

export default TechniqueProfile;