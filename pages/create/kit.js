import React, {Component} from 'react';
import KitServices from '../../services/KitServices';
import UserContext from '../../components/contexts/UserContext';
import { Input, Select } from 'antd';
import * as toastr from 'toastr';
import TechniqueList from '../../components/survivalKit/TechniqueList';
import ProductList from '../../components/survivalKit/ProductList';
import TipsList from '../../components/survivalKit/TipsList';
const { TextArea } = Input;


const OPTIONS = ["Addiction", "Sleep", "Spirituality", "Cognitive Skills"];
//Kit/create = route. Needs Authentication 
class KitCreate extends Component {
    state = {
        kit : {
          title: "",
          influencer: false,
          products: [],
          tips: [],
          techniques: [],
          category: "",
          role: ""
        },
        selectedItems: [],
        kitCreate: false,
        fixedArrays: false
    };

    static contextType = UserContext;
    
    onChange = (e) => {
        let { kit } = this.state;
        kit[e.target.name] = e.target.value
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

        if (kit.influencer === false) {
          toastr.error("Please complete all required fields")
          return
        } else {
          this.addBackend();
        }
      };

      addBackend () {
        const {kit} = this.state;

        if (kit.techniques.length > 1) 
        {
          const techniques = kit.techniques.split(' , ');
          this.setState({techniques})
        } 
        else if (kit.tips.length > 1) 
        {
          const tips = kit.tips.split(' , ');
          this.setState({tips})
        } 
        else if (kit.products.length > 1) 
        {
          const products = kit.products.split(' , ');
          this.setState({products})
        } 
        


        KitServices.kitCreate({
          kit: {
            title: kit.title,
            influencer: kit.influencer,
            products: kit.products,
            tips: kit.tips,
            techniques: kit.techniques,
            category: kit.category[0]
          }
        })
          .then((kit)=>{
            this.setState({
              kit: kit,
              kitCreate:true
            })
          })
          .catch((e)=> console.log(e))
      };
      
      
    render() {
      const { kit, selectedItems } = this.state;
      const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

        return (
            <div className="create-survival-page">
            <div className="create-survival-kit-div">
                 <Input name="title" placeholder="Please enter title"  onChange={this.onChange} />
                 <Input name="influencer" placeholder="Please enter influencer id"  onChange={this.onChange} />
                 <Input name="techniques" placeholder="add technique id separated by ',' " onChange={this.onChange} />
                 <Input name="tips" placeholder="add tips id separated by ',' " onChange={this.onChange} />
                 <Input name="products" placeholder="add products id separated by ',' " onChange={this.onChange} />
                 
                 {/* <TechniqueCreate influencer={this.state.kit.influencer} getData={this.getTechnique}></TechniqueCreate> */}
   
                 {/* <Input name="category" placeholder="Please enter category"  onChange={this.onChange} /> */}
                
                 <Select
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

                 {/* <TextArea name="tips" rows={4} type="text" placeholder="Add Cloudinary images url separated by a space" onChange={this.onChangeImage} /> */}               
                 <button onClick={this.onSubmit}>Submit</button>
            </div>
            <div>
                <TechniqueList></TechniqueList>
                <ProductList></ProductList>
                <TipsList></TipsList>
            </div>
            </div>
        )
    }
    
}

export default KitCreate