import React, { Component } from 'react';
import AuthServices from '../../services/AuthServices';

class TipProfile extends Component {
    state = {
        tip: "",
        size: "130px",
		divSize: "60px",
    }

    componentDidMount() {
        this.setState({tip: this.props.tip})
    }



    shrinkParagraph = (p) => {
        // const {kit} = this.state;
        const length = p.length;
    
            if (length > 180){
                return(
                    <p>{p.substring(0, 180)} ...</p>
                )
            } else {
               return(
                   <p>{p}</p>
               )
            }
    }; 

    openCard = () => {
        let newSize = this.state.size === '130px' ? '250px' : '130px';
        let newDivSize = this.state.divSize === '60px' ? '110px' : '60px';
        this.setState({ size: newSize, divSize:newDivSize });
    };

    showMore = () => {
        const { tip } = this.state;
        
        if (this.state.size === "130px") {
                return(
                <div onClick={this.openCard} className="learn-more-survival-tip">
                        <p>Show more</p>
                        <img id="arrow-down-kit-tip" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                </div>
                )
        } else {
                return(
                <div>
                    <p id="tip-kit-box-description">{tip.description}.</p>
                    <div onClick={this.openCard} className="learn-more-survival-tip">
                        <p>Show less</p>
                        <img style={{transform:"rotate(-180deg)"}}id="arrow-down-kit-tip" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575324512/chevron-left_2_copy_2.svg" alt="laern more arrow" />
                    </div>
                </div>
                )
        }
};

    unfavorite = () => {
        const { tip } = this.state;
        const {user} = this.props;
        
        AuthServices.unfavoriteTip(user._id, tip._id)
            .then(() => this.setState({tip: ""}))
            .catch((err) => console.log(err))

    };

    render() {
        const { tip } = this.state;
    
        if (tip === "") {
            return(
                <div></div>
            )
        } else {
            return (
                <div style={{height:this.state.size}} className="tip-kit-div-card">
                <div className="tip-card-image-div">
                    <img id="tip-bulb" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1582921452/TECHNIQUES_FONTGUIDEAsset_4_300x.png"/>
                </div>
                <div className="tip-kit-description">
                    <p style={{fontSize:"3.5vh", height: this.state.divSize}} id="tip-kit-header">
                    {this.shrinkParagraph(tip.header)}
                    </p>
                    {this.showMore()}

                    {/* <p>{tip.description}</p> */}
                </div>
                <div className="line-2"></div>
            <div className="tip-survival-prize-div">
                    <div className="survival-save-favorite">
                       
                        <img onClick={this.unfavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1584740221/icons8-close-window-32.png" alt="bookmark" />
                    </div>
                </div>
            </div>
            );
        }

    }
}

export default TipProfile;