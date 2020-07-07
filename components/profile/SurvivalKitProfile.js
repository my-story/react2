import React,{ Component } from 'react';
import * as toastr from 'toastr';
import KitServices from '../../services/KitServices';
// import ProductKit from '../survivalKit/ProductKit';
import TechniqueProfile from '../profile/TechniqueProfile';
import TipProfile from './TipProfile';
import ProductKitProfile from './ProductKitProfile';
import AuthServices from '../../services/AuthServices';
// import TipKit from '../survivalKit/TipKit';

class SurvivalKitProfile extends Component {

    state = {
        user: "",
        kit: "",
        tips: "",
    };  

 

    componentDidMount = () => {
        this.setState({user:this.props.user});

        KitServices.getKitProfile(this.props.kit)
        .then((kit) => {
            this.setState({kit}) 
        })
        .catch((err) => console.log(err))
    };

    unfavorite = () => {
        const { kit } = this.state;
        const {user} = this.props;
        
        AuthServices.unfavoriteKit(user._id, kit._id)
            .then(() => this.setState({kit: ""}))
            .catch((err) => console.log(err))

    };


    render(){
        const {kit, user } = this.state || {};

  

        if (kit === undefined || kit.influencer === undefined ) {
            return(<div></div>)
        } else {
            return (
                <div className="product-kit-page">
                    
                {/* <div className="rectangle-survival-title">
                    <img className="rectangle-survival-title-picture" src={kit.influencer.profilePic}/>
                    <div className="review-survival-title">
                    <div>
                        <h2 id="review-survival-title"><b>{kit.title}</b></h2>
                    </div>
                    <div>
                        <h4 id="review-survival-title">{kit.influencer.name.firstName} {kit.influencer.name.lastName}</h4>
                    </div>
                    </div>
                        <div className="kit-close-exit-div">
                        <img id="survival-title-bookmark-image" onClick={this.unfavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584740221/icons8-close-window-32.png" alt="bookmark" />
                        
                        </div>
                </div>   */}
                
                <div>   
                    {kit.products.map((product , index) => { 
                    if (user.products.includes(product._id))
                    {
                        return(
                            <ProductKitProfile key={index} user={user} product={product}></ProductKitProfile>
                        )
                    } 
                    })}
                    {kit.techniques.map((technique , index) => { 
						if (user.techniques.includes(technique._id))
						{
							return(
                            <TechniqueProfile key={index} user={user} technique={technique}></TechniqueProfile>
                            ) 
						} 
                    })}
                    {kit.tips.map((tip , index) => { 
                    if (user.tips.includes(tip._id))
                    {
                      return (
                        <TipProfile key={index} user={user} tip={tip}></TipProfile>
                      )
                       
                    }
                    })}
                
                {/* {kit.products.map((p, index) => {
                    let product = p.product;
                    return(
                    <ProductKit p={p} product={product} kit={kit} ></ProductKit>
                    )
                })} */}
    
                {/* //Techniques DESIGN FIGURE OUT How to dispaly all of them */}
                {/* {kit.techniques.map((technique , index) => {
                    return(
                        <TechniqueKit technique={technique} kit={kit}></TechniqueKit>
                    )
                })
                } */}

                {/* TIPS MAP */}
                {/* {kit.tips.map(( tip, index ) => {
                    return(
                        <div key={index}>
                            <TipKit tip={tip} kit={kit} key={index}></TipKit>
                        </div>
                    )
                })} */}
                </div>
                </div>
            )    

        }
            }
}

export default SurvivalKitProfile;