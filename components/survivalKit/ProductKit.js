import React, { Component } from 'react';
import * as toastr from 'toastr';

import AuthServices from '../../services/AuthServices';
import KitServices from '../../services/KitServices';
import UserContext from '../../components/contexts/UserContext';

class ProductKit extends Component {
    state = {
        size: "150px",
        product:{},
        products: [],
        kit: ""
    }

    static contextType = UserContext;
    
    componentDidMount() {
        const id  = this.props.p._id;
        KitServices.getProductSurvival(id)
          .then((product) => this.setState({product}))
          .catch(err => console.log(err))
    };

    openCard = () => {
        let newSize = this.state.size === '150px' ? '300px' : '150px';
        this.setState({ size: newSize });
    };

    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
    
        if (this.state.size === "150px") {
            if (length > 100){
                return(
                    <p>{p.substring(0,100)} ...</p>
                )
            } else {
               return(
                   <p>{p}...</p>
               )
            }
        } else {
            return(
                <p>{p}</p>
            )
        }
    };

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

 
    showMore = () => {
        if (this.state.size === "150px") {
            return(
            <div onClick={this.openCard} className="learn-more-survival">
                <p>Show more</p>
                <img id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        } else {
            return(
                <div onClick={this.openCard} className="learn-more-survival">
                <p>Show less</p>
                <img style={{transform:"rotate(-180deg)"}}id="arrow-down-kit" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
            </div>
            )
        }
    };

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
        const {products} = this.state

        if (!this.context.islogged) {
            return toastr.info('Log in to favorite');
        } else {
            if(user.products.includes(this.props.p._id || products.includes(this.props.p._id))){
                return toastr.error(`Product is already favorited!`);
            } else {
                this.checkSurvivalKit();
                AuthServices.favoriteProduct(user._id, this.props.p._id)
                .then(() => {
                    toastr.info(`Product was favorited!`);
                    var joined = this.state.products.concat(this.props.p._id);
                    this.setState({products: joined})
                })
                .catch((error) => console.log(error));
            }
            
        }
    };


    render(){
        const product = this.props.product;
        const productMain = this.state.product.product;
        const p = this.props.p;
				
       if (productMain === undefined) {
           return(<div>waiting on product survival kit</div>)
       } else {
        return(
            <div style={{height:this.state.size}} className="survival-kit-card">
            <div className="survival-card-image-div">
                <img id="survival-image" src={productMain.images[0]}/>
            </div>
            <div className="kit-description-div">
                <div className="kit-name-category">
                    <p id="product-name"><b>{productMain.model}</b></p>
                    <div className="kit-category-bubble">
                        <div>
                            <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                            <span>{productMain.category}</span>
                        </div>
                    </div>
                </div>
                <div className="kit-description-p">
                    {this.shrinkParagraph(p.comment)}
                </div>
                    {this.showMore()}
            </div>
            <div className="line-2"></div>
            <div className="survival-prize-div">
            <div className="survival-save-favorite">
                <img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
            </div>
                <p id="survival-prize">${productMain.prize}</p>
                <button className="survival-kit-add-to-cart">Add to card</button>
            </div>
        </div>
        )
       }
        
    }
}

export default ProductKit