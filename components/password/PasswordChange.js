import React, { Component } from 'react';
import { Input } from 'antd';
import * as toastr from 'toastr';
import AuthServices from '../../services/AuthServices';
import UserContext from '../../components/contexts/UserContext';


class PasswordChange extends Component {

    state = {
        user: "",
        newUser: {},
        editName: false,
        password: "",
        newPassword: "",
        confirmPassword: ""

    }

    onChange = (e) => {
        let { newUser } = this.state;
        newUser[e.target.name] = e.target.value;
        this.setState({ newUser });
    };
    handleChange = (e) => {
        // let { newUser } = this.state;
        let password = e.target.value;
        this.setState({ password });
    };

	static contextType = UserContext;

    componentDidMount(){
        this.setState({user: this.context.user})
    }

    editData = () => {
        const {user, unchangedUser} = this.state;
        let name = this.state.editName === false ? true : false;
        this.setState({ editName: name });
    };

    confirmPassword = () => {
        const {password, newPassword, confirmPassword, user} = this.state;

        const userHandle = {
            username: this.state.user.username,
            password: password
        };
        console.log(user);

        AuthServices.login(userHandle)
        .then(response => {
          if (response.status === 200) {
            if (newPassword === confirmPassword){
                AuthServices.editPassword(user._id, newPassword)
                    .then(() => this.setState({editName: false}))
                    .catch((err) => console.log(err))
            } else {
                toastr.error("Passwords Don't Match")
            }
          }
        }).catch(error => {
          toastr.error("Incorrect Password");
        })
    }



    render () {
        const {editName} = this.state;
        console.log(this.state)
//NEEDS TO VERIFY IF TYPED PASSWORD IS THE RIGHT ONE, THEN GIVE HIM THE OPTION TO CHANGE IT.
        if (editName === false){
            return (
                <div className="settings-div">
                    <div className="settings-option-name">
                        <p>Password</p>
                    </div>
                    <div className="settings-options-div">
                        <p>*********</p>
                        <p onClick={this.editData}>Edit</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="settings-div-password">
                    <div className="settings-option-name">
                        <p>Password</p>
                    </div>
                    <div className="settings-options-div-password"> 
                    <div>
                        <div className="settings-input">
                          
                            <Input name="password" placeholder="Old Password" allowClear onChange={this.handleChange} />
                        </div>
                        <div className="settings-input">
                      
                            <Input name="newPassword" placeholder="New Password" allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                       
                            <Input name="confirmPassword" placeholder="Repeat Password" allowClear onChange={this.onChange} />
                        </div>
                        <div className="settings-input">
                            <button onClick={this.confirmPassword} id="button-save">Save</button>
                            <button onClick={this.editData}>Cancel</button>
                        </div>
                    </div>
                </div>
                </div>
            )
        }

    }
}

export default PasswordChange