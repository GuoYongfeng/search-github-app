import React, { Component } from 'react'

class UserProfile extends Component {
  render(){
    return (
      <h1> this is UserProfile.message: { this.props.username }</h1>
    )
  }
}

export default UserProfile
