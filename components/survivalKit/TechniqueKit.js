import React, { Component } from 'react';
import * as toastr from 'toastr';
import AuthServices from '../../services/AuthServices';
import UserContext from '../../components/contexts/UserContext';

class TechniqueKit extends Component {
    state = {
        technique:{},
        techniques: ["0"],
        kit: ""
    }

    static contextType = UserContext;

    componentDidMount() {
        this.setState({technique: this.props.technique})
    }

    checkSurvivalKit = () => {
        const user = this.context.user;
        if(user.kits.includes(this.props.kit._id) || this.state.kit === this.props.kit._id){
            return
        } else {
            AuthServices.favoriteKit(user._id, this.props.kit._id)
                .then(() => this.setState({kit: this.props.kit._id}))
                .catch((error) => console.log(error));
        }
    };

    addFavorite = () => {
        const user = this.context.user;
        const {techniques} = this.state

        if (!this.context.islogged) {
            return toastr.info('Log in to favorite');
        } else {
            if(user.techniques.includes(this.props.technique._id)){
                return toastr.error(`${this.props.technique.title} is already favorited!`);
            } else {
                this.checkSurvivalKit();
                AuthServices.favoriteTechnique(user._id, this.props.technique._id)
                .then(() => {
                    toastr.info(`${this.props.technique.title} was favorited!`);
                    var joined = this.state.techniques.concat(this.props.technique._id);
                    this.setState({techniques: joined})
                })
                .catch((error) => console.log(error));
            }
            
        }
    };
    
    render() {
        const {technique} = this.props;
    
        return (
            <div>
            <div className="technique-survival-kit-card">
            <div className="survival-card-image-div">
                <img id="survival-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921481/TECHNIQUES_FONTGUIDEAsset_6_300x.png"/>
            </div>
            <div className="technique-kit-description-div">
            <div className="technique-kit-name-category">
                        <h1 id="technique-name"><b>{technique.title}</b></h1>
                        <div className="technique-with-category-div">
                        <p id="technique-word">Technique</p>
                        {/* <span id="category-bubble-profile">{technique.category}</span> */}

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
                    <div className="technique-survival-prize-div">
                    <div className="survival-save-favorite">
                        <img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
                    </div>
                        
                    </div>
            </div>

    </div>
        );
    }
}

export default TechniqueKit;