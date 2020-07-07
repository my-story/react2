import React from 'react';
import Router from 'next/router';
import AuthServices from '../../services/AuthServices';

class Logout extends React.Component {

  handleClick = (event) => {
    event.preventDefault();

    AuthServices.logout(this.props.user)
      .then((response) => {
        if (response.status === 200) {
          this.props.logout();
          console.log("Succesfull Logout");
          Router.push('/login');

        } else {
          console.log("Already Logged-out");
        }
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <div>
        <button id="logout-button" onClick={event => this.handleClick(event)} >Logout</button>
      </div>
    )
  }

}
export default Logout