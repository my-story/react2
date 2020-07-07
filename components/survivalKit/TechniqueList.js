import React, { Component } from "react";
import KitServices from "../../services/KitServices";

class TechniqueList extends Component {
    state = {
        techniques: []
    }

    componentDidMount() {
        KitServices.getListTechnique()
            .then((techniques) => this.setState({techniques}))
            .catch((error) => console.log(error))
    }
    render() {
        const {techniques} = this.state;

        if(techniques.length > 0) {
            return(
                <div className="technique-list-page">
                    <h4>TechniqueList</h4>
                    {techniques.map((technique, index) => {
                        return(
                            <div className="list-survival" key={index}>
                               <p> ID :  {technique._id}</p>
                               <p> title :  {technique.title}</p>
                               <p> Influencer : {technique.influencer} </p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return(<div> No Unassigned Techniques</div>)
        }
            
   

    }
}

export default TechniqueList;