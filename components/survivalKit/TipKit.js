import React, { Component } from 'react';
import * as toastr from 'toastr';
import AuthServices from '../../services/AuthServices';
import UserContext from '../../components/contexts/UserContext';

class TipKit extends Component {
    state = {
			tip: "",
			size: "130px",
			divSize: "60px",
			tips: [],
			kit: ""
		}
		
    static contextType = UserContext;

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

	
    addFavorite = () => {
        if (!this.context.islogged) {
            return toastr.info('Log in to favorite');
        }
        console.log(this.state.tip._id)
		}

		openCard = () => {
			let newSize = this.state.size === '130px' ? '200px' : '130px';
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

		if (!this.context.islogged) {
				return toastr.info('Log in to favorite');
		} else {
			if(user.tips.includes(this.props.tip._id) || this.state.tips.includes(this.props.tip._id)){
				return toastr.error(`${this.props.tip.header} has already been favorited!`)
			} else {
				this.checkSurvivalKit();
				AuthServices.favoriteTip(user._id, this.props.tip._id)
					.then(() => {
							var joined = this.state.tips.concat(this.props.tip._id);
							toastr.info(`${this.props.tip.header} was favorited!`);
							this.setState({tips: joined})
					})
					.catch((error) => console.log(error));
			}
				
		}
};

    render() {
		const {tip} = this.state;
	
		if (tip === "") {
			return(<div>Loading...</div>)
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
							<img onClick={this.addFavorite} src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1575401603/Bookmark__Copy.svg" alt="bookmark" />
						</div>
					</div>
				</div>
        	);
		}
        
    }
}

export default TipKit;