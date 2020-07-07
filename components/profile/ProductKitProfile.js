import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import AuthServices from '../../services/AuthServices';

class ProductKitProfile extends Component {
    state = {
        product: "",
        size: "150px",

    }
    
      
    componentDidMount() {
        const id  = this.props.product._id;
        KitServices.getProductSurvival(id)
          .then((product) => this.setState({product}))
          .catch(err => console.log(err))
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


    
    unfavorite = () => {
        const { product } = this.state;
        const {user} = this.props;
        
        AuthServices.unfavoriteProduct(user._id, product._id)
            .then(() => this.setState({product: ""}))
            .catch((err) => console.log(err))
    };

    render() {
        const { product } = this.state;
        

        if (product === "") {
            return(<div></div>)
        } else {
         return(
             <div style={{height:this.state.size}} className="survival-kit-card">
             <div className="survival-card-image-div">
                 <img id="survival-image" src={product.product.images[0]}/>
             </div>
             <div className="kit-description-div">
                 <div className="kit-name-category">
                     <p id="product-name"><b>{product.product.model}</b></p>
                     <div className="kit-category-bubble">
                         <div>
                             <img src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324090/heart-kit.svg"alt="" />
                             <span>{product.category}</span>
                         </div>
                     </div>
                 </div>
                 <div className="kit-description-p">
                     {this.shrinkParagraph(product.comment)}
                 </div>
                     {this.showMore()}
             </div>
             <div className="line-2"></div>
             <div className="survival-prize-div">
             <div className="survival-save-favorite">
                <img onClick={this.unfavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584740221/icons8-close-window-32.png" alt="bookmark" />     
             </div>
                 <p id="survival-prize">${product.prize}</p>
                 <button className="survival-kit-add-to-cart">Add to card</button>
             </div>
         </div>
         )
        }
    }
}

export default ProductKitProfile;