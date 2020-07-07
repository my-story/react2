import React, { Component } from 'react';
import Router from 'next/router';
import { Input, Tooltip, Icon, Select } from 'antd';
import * as toastr from 'toastr';
import UserContext from '../../../components/contexts/UserContext';
import InfluencerServices from '../../../services/InfluencerServices';

const OPTIONS = ["Athlete", "Musician", "Tech", "Artist"];

class InfluencerUpdate extends Component {
  state = {
    oldInflu: "",
    influencer: "",
    selectedItems: [],
    done: false,
    influencerDone: {},
  }

  static contextType = UserContext;
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  componentDidMount() {
    InfluencerServices.getOne(this.props.id)
      .then((influencer) => this.setState({ 
        influencer : {
          name: influencer.data.name,
          description: influencer.data.description,
          expertise: influencer.data.expertise,
          profilePic: influencer.data.profilePic
        }

       }))
      .catch((error) => console.log(error))
  };

  onChange = (e) => {
    let { influencer } = this.state
    influencer[e.target.name] = e.target.value
    this.setState({ influencer })
  };

  handleChange = (selectedItems) => {
    this.setState({
      influencer: {
        ...this.state.influencer,
        expertise: selectedItems
      }
    })
  }

  onSubmit = () => {
    let { influencer } = this.state;

    if (influencer.expertise.length === 0 || influencer.description.length === 0) {
      toastr.error("Please complete all required fields")
      return
    } else {
      const id = this.props.id;
      InfluencerServices.updateInfluencer(influencer, id)
        .then(() => this.setState({ done: true }))
        .catch(err => console.log(err))
    }
  };


  render() {
    const { selectedItems, influencer, oldInflu } = this.state;
    // const {data} = this.state.data;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o))
    console.log(this.state)


    if (influencer === ""){
      return(<div>Loading...</div>)
    } else {
      if (this.context.user.role === "Admin" && !this.state.done && influencer !== "" ) {
        return (
          <div>
            <h1>Create Influencer</h1>
            <div className="create-card">
              <Input name="firstName" defaultValue={influencer.name.firstName} placeholder="Enter Person's Name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
                <Tooltip title="Make Sure to write with Capitals">
                  <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              } />
              <Input name="lastName" defaultValue={influencer.name.lastName} placeholder="Last Name " allowClear onChange={this.onChange} />
              <Input name="description" defaultValue={influencer.description} placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
              <Select
                mode="multiple"
                placeholder="This is his/her Category. ADMIN can create new categories"
                defaultValue={influencer.expertise}
                onChange={this.handleChange}
                style={{ width: '100%' }}>
                {filteredOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
              <Input name="profilePic" defaultValue={influencer.profilePic} placeholder="image" onChange={this.onChange} />
              <button onClick={this.onSubmit}>Update</button>
            </div>
          </div>
        )
      } else {
        Router.push('/admin/influencer-chart');
        return null;
      }
    }
  }
};

export default InfluencerUpdate;
