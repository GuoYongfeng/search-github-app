import React, { Component } from 'react'

import Notes from './Notes.js'
import UserRepos from './UserRepos.js'
import UserProfile from './UserProfile.js'

import getGithubInfo from '../utils/getGithubInfo.js'

class Profile extends Component {
  render(){
    const { username } = this.props.params

    getGithubInfo( username )

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} />
        </div>
        <div className="col-md-4">
          <UserRepos username={username} />
        </div>
        <div className="col-md-4">
          <Notes username={username} />
        </div>
      </div>
    )
  }
}

export default Profile
