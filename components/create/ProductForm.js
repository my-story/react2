import React,{ Component } from 'react';
import Router from 'next/router';
import { Input, Select } from 'antd';
import * as toastr from 'toastr';
import UserContext from '../contexts/UserContext';
import ProductServices from '../../services/ProductServices';

const OPTIONS = ["Sports","Music","Tech","Clothes"];
const { TextArea } = Input;

class ProductCreate extends Component {
  state = {
    product: {
      model:"",
      prize:0,
      description:"",
      category:[],
      images:[],
      total: "",
    },
    selectedItems: [],
    productCreated: null
  };

  static contextType = UserContext;

  onChange = (e) => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    this.setState( {product} )
  };


  onChangeImage = (e) => {
    let { product } = this.state
    let value = e.target.value;
    product[e.target.name] = value.split(' ');
    this.setState( {product} )
  };

  handleChange = (selectedItems,imageUrl) => {
    this.setState({ product: {
        ...this.state.product,
        category: selectedItems,
      } })
  }

  onSubmit = () => {
    let { product } = this.state
    if (product.model.length === 0||product.prize === 0 || product.description.length === 0 || product.category.length === 0) {
      toastr.error("Please complete all required fields")
      return
    } else {
      this.addBackend()
    }
  }

  addBackend () {
    ProductServices.productForm(this.state.product)
      .then((product)=> {
        this.setState({
          product: product,
          productCreated:true
        })
      })
      .catch((e)=>console.log(e))
  }

  render(){
    const { selectedItems, product } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

    if (this.context.user.role === "Admin" || !this.state.productCreated) {
        return(
          <div>
              <h2>Create Product</h2>
            <div className="create-card">
              <Input name="model" placeholder="Please enter product name"  onChange={this.onChange} />
              <Input name="prize" type="number" placeholder="Please enter product price"  onChange={this.onChange} />
              <Input name="total" type="number" placeholder="Please enter the amount of products in stock"  onChange={this.onChange} />
              <TextArea name="images" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} />
              <TextArea name="description" rows={4} placeholder="Please enter product description"  onChange={this.onChange} />
              <Select
              mode="multiple"
              placeholder="Pick Category"
              value={product.category}
              onChange={this.handleChange}
              style={{ width: '100%' }}
              >
              {filteredOptions.map(item => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={this.onSubmit}>Submit</button>
          </div>
          </div>
        )
    } else {
      Router.push('/')
      return null;
    }
  }
}
  export default ProductCreate;