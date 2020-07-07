import React, { Component } from 'react'
import KitServices from '../../services/KitServices';
import KitCard from '../../components/survivalKit/KitCard';

class KitMap extends Component {

    state = {
        kits: []
    }

    componentDidMount() {
        this.fetchKits();
    }

    fetchKits = () => {
        KitServices.getAll()
          .then(kits => this.setState({kits}))
          .catch((error) => console.log(error))
    };

    render () {
        const {kits} = this.state;

        return (
            <div className="expert-card-section">
            {kits.map((i, index) => {
                return (
              <div className="sage-outer-most-container">
                <KitCard kit={i} index={index} />
              </div> 
            )
          })}
          </div>
      
        )
    }
}

export default KitMap