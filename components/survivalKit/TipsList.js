import React, {Component} from 'react';
import KitServices from "../../services/KitServices";

class TipsList extends Component{
    state = {
        tips: []
    }

    componentDidMount(){
        KitServices.getListTips()
            .then((tips) => {
                this.setState({tips})
            })
            .catch((error) => console.log(error))
    }
    render() {
        const {tips} = this.state;

        if(tips.length > 0) {
            return(
                <div className="technique-list-page">
                    <h4>TipsList</h4>
                    {tips.map((tip, index) => {
                        return(
                            <div className="list-survival" key={index}>
                               <p> ID :  {tip._id}</p>
                               <p> title :  {tip.header}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return(<div> No Unassigned Tips</div>)
        }
    }
}

export default TipsList;