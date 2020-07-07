import React,{ Component } from 'react';
import KitServices from '../../services/KitServices';
import ProductKit from './ProductKit';
import TechniqueKit from './TechniqueKit';
import TipKit from './TipKit';

class SurvivalKit extends Component {

    state = {
        kit : {}
    };  
    
    static getInitialProps({ query: { id } }) {
        return { id };
    }

    componentDidMount = () => {
        KitServices.getKit(this.props.id)
        .then((kit) => {
            this.setState({kit})
        })
        .catch((err) => console.log(err))
        }


//Add three dots ... after a certain length of the string.
    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
         if (length > 100){
             return(
                 <p>{p.substring(0,100)} ...</p>
             )
         } else {
            return(
                <p>{p}...</p>
            )
         }
    }
    render(){
        const {kit} = this.state || {};
        console.log(this.state)
        
        if (kit === undefined || kit.products === undefined || kit.techniques === undefined) {
            return(<div>...</div>)
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
                     <h4 id="review-survival-title-name">{kit.influencer.name.firstName} {kit.influencer.name.lastName}</h4>
                  </div>
                </div>
            
				<img id="survival-title-bookmark-image" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
            
            </div> */}
                {kit.products.map((p, index) => {
                    let product = p.product;
                    return(
                    <ProductKit key={index} p={p} product={product} kit={kit} ></ProductKit>
                    )
                })}
    
                {/* //Techniques DESIGN FIGURE OUT How to dispaly all of them */}
                {kit.techniques.map((technique , index) => {
                    return(
                        <TechniqueKit key={index} technique={technique} kit={kit}></TechniqueKit>
                    )
                })
                }

                {/* TIPS MAP */}
                {kit.tips.map(( tip, index ) => {
                    return(
                        
                            <TipKit key={index} tip={tip} kit={kit} key={index}></TipKit>
                       
                    )
                })}
                </div>
            )    

        }
            }
}

export default SurvivalKit;