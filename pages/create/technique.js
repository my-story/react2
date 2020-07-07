import React, { Component } from 'react';
import KitServices from '../../services/KitServices';
import { Input, Select } from 'antd';
const { TextArea } = Input;

const OPTIONS = ["Addiction", "Sleep", "Spirituality", "Cognitive Skills"];

class TechniqueCreate extends Component {

    state = {
        techniques: [],
        technique: {
            influencer: "",
            title: "",
            subheading : [{
            }],
            recommendation: "",
            category: "",
        },
        data: {
          header: "",
          description: [],
        },
        techniqueDescription: [],
        selectedItems: [],
    }
    

    handleChange = (e) => {
      let { data } = this.state
      data[e.target.name] = e.target.value
      this.setState({ data });
    };

    onChange = (e) => {
        let { technique } = this.state;
        technique[e.target.name] = e.target.value
        this.setState( {technique} )
      };

    categoryChange = (selectedItems) => {
        this.setState({
          technique : {
            ...this.state.technique,
            category: selectedItems

          }
        })
      };

    fixTechniques = () => {
        const {description, header} = this.state.data;

        const descriptions = description.split('-') ;
        
        let subheading = {
            header,
            descriptions
        }

        let array = this.state.technique.subheading;
        let newArray = array.push(subheading);

       

        if(subheading !== "") {
          this.setState({ techniques:{subheading:newArray}})
        }
      };

      addTechniques = () => {
        const { technique } = this.state;

        KitServices.createTechnique({
          technique: {
            influencer: technique.influencer,
            title: technique.title,
            subheading: technique.subheading,
            recommendation: technique.recommendation
          }
        })
        .then((res) => this.setState({ created: true, technique: res.data}))
        .catch((e) => console.log(e))
      }


    render() {
      const {selectedItems} = this.state;
      const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

        return (
            <div>
                <Input name="influencer" type="text" placeholder="Add influencer ID" onChange={this.onChange} />
                <TextArea name="title" rows={4} type="text" placeholder="Add technique title" onChange={this.onChange} />
                <div className="technique-form-inputs">
                  <div>
                  <TextArea name="header" rows={4} type="text" placeholder="Add technique header" onChange={this.handleChange} />
                  <TextArea name="description" rows={4} type="text" placeholder="Add technique description" onChange={this.handleChange} />
                  </div>
                  <button onClick={this.fixTechniques}>Add more subheadings</button> 
                </div>
                <Select
                    mode="multiple"
                    placeholder="This is the Category. ADMIN can create new categories"
                    name="category"
                    onChange={this.categoryChange}
                    style={{ width: '100%' }}>
                    {filteredOptions.map(item => (  
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
                <button onClick={this.addTechniques}>Send technique</button>  

            </div>
        );
    }
}

export default TechniqueCreate;