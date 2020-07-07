import React, { Component } from 'react';
import Router from 'next/router';
import { Input , InputNumber } from 'antd';
import PodcastServices from '../../services/PodcastServices';
import UserContext from '../contexts/UserContext';

class PodcastForm extends Component {
    state = {
        podcast : {},
        done: false
    }

    static contextType = UserContext;

    onChange = (e) => {
        let { podcast } = this.state;
        podcast[e.target.name] = e.target.value;
        this.setState({ podcast });
    };

    handleSubmit = () => {
        const {podcast} = this.state;

        PodcastServices.create({ podcast})
          .then(() => this.setState({done:true}))
          .catch((e)=>console.log(e))  
      };

    render() {

        if (this.context.user.role === "Admin"){
            if (!this.state.done) {
                return (
                    <div>
                        <h1>Create Podcast</h1>
                        <Input name="influencer" placeholder="influencer" allowClear onChange={this.onChange}  />
                        <Input name="title" placeholder="title" allowClear onChange={this.onChange}  />
                        <Input name="video" placeholder="video" allowClear onChange={this.onChange}  />
                        <Input name="audio" placeholder="audio" allowClear onChange={this.onChange}  />
                        <Input name="description" placeholder="description" allowClear onChange={this.onChange}  />
                        <Input name="image" placeholder="image thumbnail" allowClear onChange={this.onChange}  />
                        <Input name="time" placeholder="How long is it" allowClear onChange={this.onChange} />
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                );
            }

        } else {
            Router.push('/');
            return null;
        }

    }
}

export default PodcastForm;