import React, { Component } from 'react';
import InfluencerServices from '../../services/InfluencerServices';
import ProductServices from '../../services/ProductServices';
import AdminPanelField from './AdminPanelField';
import ProductPanel from './ProductPanel';


class AdminPanel extends Component {
  state = {
    influencers: [],
    products: []
  };

  fetchInfluencer = () => {
    InfluencerServices.getAllAdmin()
      .then(influencers => this.setState({
        influencers: influencers
      }))
      .catch((err) => console.log(err))
  }
  fetchProducts = () => {
    ProductServices.getAll()
      .then((products) => this.setState({products}))
      .catch((err) => console.log(err))
  }

  componentDidMount = () =>{
    this.fetchInfluencer();
    this.fetchProducts();
  }


  render() {
    return(
      <div>
        {this.state.influencers.map((i, index) => {
          return (
            <AdminPanelField influencer={i} key={index} />
          )
        })}
        <div>
        <h2>Products</h2>
        {this.state.products.map((p, index) => {
          return(
            <ProductPanel product={p} key={index}></ProductPanel>
          )
        })}
        </div>
      </div>
    )
  }
}

export default AdminPanel;