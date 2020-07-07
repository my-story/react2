import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Input, Tooltip, Icon, Select } from 'antd';
import * as toastr from 'toastr';
import UserContext from '../contexts/UserContext';
import InfluencerServices from '../../services/InfluencerServices';


const OPTIONS = ["Athlete", "Musician", "Tech", "Artist", "Runner", "Author"];

class InfluencerForm extends Component {

  state = {
    data: {
      expertise: [],
      firstname: "",
      lastname: "",
      description: "",
      profilePic: ""
    },
    selectedItems: [],
    done: false,
    influencerDone: {},
  };

  static contextType = UserContext;

  onChange = (e) => {
    let { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleChange = (selectedItems) => {
    this.setState({
      data: {
        ...this.state.data,
        expertise: selectedItems
      }
    })
  };

  onSubmit = () => {
    let { data } = this.state;

    if (data.expertise.length === 0 || data.firstname.length === 0 || data.lastname.length === 0 || data.description.length === 0) {
      toastr.error("Please complete all required fields");
      return;
    }
    InfluencerServices.createInfluencer(data)
      .then((influencer) => this.setState({
        influencerDone: influencer,
        done: true,
      }))
      .catch((e) => console.log(e));
  };

  render() {
    const { selectedItems, data } = this.state;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    
    if (this.context.user.role === "Admin") {
      if (!this.state.done) {
        return (
          <div>
            <h1>Create Influencer</h1>
            <div className="create-card">
              <Input name="firstname" placeholder="Enter Person's first name" onChange={this.onChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} suffix={
                <Tooltip title="Make Sure to write with Capitals">
                  <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
              } />
              <Input name="lastname" placeholder="Lastname" allowClear onChange={this.onChange} />
              <Input name="description" placeholder="Description of person, hobbies, sports, job, etc... " allowClear onChange={this.onChange} />
              <Input name="profilePic" placeholder="Add images URL" allowClear onChange={this.onChange} />
              <Select
                mode="multiple"
                placeholder="This is his/her Category. ADMIN can create new categories"
                value={data.expertise}
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
          </div>
        );
      } 
    } else {
      Router.push('/');
      return null;
    }
  }
};

export default InfluencerForm;