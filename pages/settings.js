import React, { Component } from 'react';
import { Input } from 'antd';
import * as toastr from 'toastr';
import AuthServices from '../services/AuthServices';
import UserContext from '../components/contexts/UserContext';
import Link from 'next/link';
import PasswordChange from '../components/password/PasswordChange';

class Settings extends Component {
    state= {
        user: {},
        unchangedUser: {},
        editName: false,
        newUser: {}

    }

	static contextType = UserContext;

    onChange = (e) => {
        let { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({ user });
    };

    componentDidMount = () => {
		this.setState({user:this.context.user, unchangedUser:this.context.user})

    };

    saveName = () => {
        const {user} = this.state;

        AuthServices.editUser(user._id, user)
        .then(() => {
            toastr.info('Name change successful!');
            this.editData();
        })
        .catch(() => {
            toastr.error('Problem with server. Try Again Later.');
        })
    }

    nameDiv = () => {
        const {editName, unchangedUser, user} = this.state;
        if (editName === false) {
            return(
                <div onClick={this.editData} className="settings-div">
                <div className="settings-option-name">
                    <p>Name</p>
                </div>
                <div className="settings-options-div">
                    <p>{unchangedUser.firstName} {unchangedUser.lastName}</p>
                    <p>Edit</p>
                </div>
            </div>
            )

        } else {
            return(
                <div className="settings-div opened">
                <div className="settings-option-name">
                    <p>Name</p>
                </div>
                <div className="settings-options-div"> 
                    <div>
                        <div className="settings-input">
                            <p>First: </p>
                            <Input name="firstName" placeholder={user.firstName} allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                        <p>Last: </p>
                            <Input name="lastName" placeholder={user.lastName} allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                            <button onClick={this.saveName} id="button-save">Save</button>
                            <button onClick={this.editData}>Cancel</button>
                        </div>
                    </div>
                </div>
                </div>
            )

        }
    }


    editData = () => {
        const {user, unchangedUser} = this.state;
        let name = this.state.editName === false ? true : false;
        this.setState({ editName: name });
    };

    render () {
        const { user, unchangedUser} = this.state;

        return (
            <div className="settings-page">
                <h1>Settings</h1>
                <div className="settings-container">
                    {this.nameDiv()}
                    <div className="settings-div">
                        <div className="settings-option-name">
                            <p>Email </p>
                        </div>
                        <div className="settings-options-div">
                            <p id="email-settings">{user.username}</p>
                        </div>
                    </div>
                    <PasswordChange></PasswordChange>

                </div>
                <Link href="/profile/dashboard">Go back to Profile</Link>
            </div>
        )
    }
}

export default Settings