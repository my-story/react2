import React, { Component } from 'react';
import { Input } from 'antd';
import Router from 'next/router';
import UserContext from '../../../components/contexts/UserContext';
import KitServices from '../../../services/KitServices';

const { TextArea } = Input;

// NEEDS TO FIX THE DELETE OF SUBHEADING (CAN BE DONE IN MONGOdb)

class TechniqueUpdate extends Component {

    state = {
        techniques: [],
        technique: "",
        data: {
          header: "",
          description: [],
        },
        techniqueCreated: false,
        techniqueDescription: [],
    }
    
    static contextType = UserContext;

    static getInitialProps({ query: { id } }) {
      return { id };
    }

    componentDidMount() {
        KitServices.getTechniqueEdit(this.props.id)
          .then((technique) => this.setState({technique}))
          .catch((error) => console.log(error))
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

    fixTechniques = () => {
        const {description, header} = this.state.data;

        const descriptions = description.split(',') ;
        
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
        KitServices.editTechniqueKit(technique._id, technique)
        .then(() => this.setState({ techniqueCreated: true}))
        .catch((e) => console.log(e))
      }


    render() {
      const { technique , techniqueCreated } = this.state;

      if (technique === ""){
        return(<div>Loading...</div>)
      } else {
        if (this.context.user.role === "Admin" && techniqueCreated === false) {
        return (
            <div>
                <Input name="influencer" defaultValue={technique.influencer} type="text" placeholder="Add influencer ID" onChange={this.onChange} />
                <TextArea name="title" defaultValue={technique.title} rows={4} type="text" placeholder="Add technique title" onChange={this.onChange} />
                <div className="technique-form-inputs">
                  <div>
                  {technique.subheading.map((t, index) => {
                    return(
                      <div>
                        <TextArea name="header" defaultValue={t.header} rows={4} type="text" placeholder="Add technique header" onChange={this.handleChange} />
                        {t.descriptions.map((des, index) => {
                          return(
                          <div>
                            <TextArea name="description" defaultValue={des} rows={4} type="text" placeholder="Add technique description" onChange={this.handleChange} />
                          </div>
                          )
                        })}
                      </div>
                    )
                  })}
                  
                  </div>
                  <button onClick={this.fixTechniques}>Add more subheadings</button> 
                </div>
                <button onClick={this.addTechniques}>Send technique</button>  
            </div>
        );
    } else {
      Router.push('/admin/influencer-chart');
      return null;
}
    }
  }
}

export default TechniqueUpdate;