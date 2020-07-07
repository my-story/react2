import React, { Component } from 'react';

class CategoryBubbleOne extends Component {
 state = {
   clicked: false
 }
 clicked = () => {
   this.props.searchbar(this.props.category)
   this.setState({
     clicked: true
   })
 }
 render() {
   const category = this.props.category;
   return(
       <span className="category-bubble" title={category} onClick={() => this.clicked()}>{category}</span>
   )
 }
}
export default CategoryBubbleOne;