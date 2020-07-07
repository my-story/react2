import React, {Component} from 'react';
import { Input, Select } from 'antd';
import * as toastr from 'toastr';
import Router from 'next/router';
import KitServices from '../../../services/KitServices';
import UserContext from '../../../components/contexts/UserContext';
import TipsList from '../../../components/survivalKit/TipsList';
import TechniqueList from '../../../components/survivalKit/TechniqueList';
import ProductList from '../../../components/survivalKit/ProductList';

const { TextArea } = Input;


const OPTIONS = ["Addiction", "Sleep", "Spirituality"];
//Kit/create = route. Needs Authentication 
class KitUpdate extends Component {
    state = {
        kit : "",
        selectedItems: [],
        oldKit: {},
        kitUpdate: false,
        fixedArrays: false

    }

    static contextType = UserContext;

    static getInitialProps({ query: { id } }) {
      return { id };
    }


    componentDidMount = () => {
      KitServices.getKitAdmin(this.props.id)
        .then((kit) => this.setState({kit}))   
        .catch((err) => console.log(err))
    }

    onChange = (e) => {
        let { kit } = this.state;
        kit[e.target.name] = e.target.value;
        this.setState( {kit} )
      };
        
      handleChange = (selectedItems) => {
        this.setState({
          kit : {
            ...this.state.kit,
            category: selectedItems

          }
        })
      };



      onSubmit = () => {
        let { kit } = this.state;
        if (kit === false) {
          toastr.error("Please complete all required fields")
          return
        } else {
          this.addBackend();
          // console.log("ready for backend")
        }
      };

      addBackend = () => {
        let {kit} = this.state;
        const id = kit._id;

        if (kit.techniques.length > 1) 
        {
          const techniques = kit.techniques.split(' , ');
        }
        if (kit.tips.length > 1) 
        {
          const tips = kit.tips.split(' , ');
        }
        if (kit.products.length > 1) 
        {
          const products = kit.products.split(' , ');
        }

        KitServices.updateKit({
          kit: {
            title: kit.title,
            influencer: kit.influencer,
            products: products,
            tips: tips,
            techniques: techniques,
            category: kit.category[0]
          }
        }, id)
        // console.log(kit)
          .then(() => this.setState({kitUpdate : true}))
          .catch((e)=>console.log(e))
      };
      
      
      
    render() {
      const { kit, selectedItems, kitUpdate } = this.state;
      const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
      console.log(kit)

      if (kit === "") {
        return(<div>Loading...</div>)
      } else {
          
        if (this.context.user.role === "Admin" && kitUpdate === false) {
          return (
            <div className="create-survival-page">
            <div className="create-survival-kit-div">
                  <p>Title</p>
                 <Input name="title"  defaultValue={kit.title} placeholder="Please enter title"  onChange={this.onChange} />
                 <p>Influencer</p>
                 <Input name="influencer" defaultValue={kit.influencer} placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <p>Techniques</p>
                 <Input name="techniques" defaultValue={kit.techniques} placeholder="add technique id separated by ',' " onChange={this.onChange} />
                 <p>Tips</p> 
                 <Input name="tips"  defaultValue={kit.tips} placeholder="add tips id separated by ',' " onChange={this.onChange} />
                 <p>Products</p>
                 <Input name="products" defaultValue={kit.products} placeholder="add products id separated by ',' " onChange={this.onChange} />
                 {/* <TechniqueCreate influencer={this.state.kit.influencer} getData={this.getTechnique}></TechniqueCreate> */}
                 {/* <Input name="category" placeholder="Please enter category"  onChange={this.onChange} /> */}
                 
                 <Select
                    value={kit.category}
                    mode="multiple"
                    placeholder="This is the Category. ADMIN can create new categories"
                    name="category"
                    onChange={this.handleChange}
                    style={{ width: '100%' }}>
                    {filteredOptions.map(item => (  
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>               
                 <button onClick={this.onSubmit}>Submit</button>
            </div>
            <div>
                <TechniqueList></TechniqueList>
                <ProductList></ProductList>
                <TipsList></TipsList>
            </div>
            </div>
        )
        } else {
          Router.push('/admin/influencer-chart');
          return null;
        }
        
      }
        
    }
    
}

export default KitUpdate;