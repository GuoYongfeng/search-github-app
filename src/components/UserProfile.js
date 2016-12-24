import React, { Component, PropTypes } from 'react'

class UserProfile extends Component {
  render(){
    const { username, info } = this.props
    let { avatar_url, name, company, email, followers, bio, blog, location } =  info

    return (
      <div>
        <h3 className="text-center"> 用户信息 </h3>
        <ul>
          { avatar_url && <li className="list-group-item">
            <img src={avatar_url} className="img-rounded img-responsive" alt=""/>
          </li>}
          { name && <li className="list-group-item"> name: {name}</li>}
          { company && <li className="list-group-item"> company: {company}</li>}
          { email && <li className="list-group-item"> email: { email }</li>}
          { followers && <li className="list-group-item"> followers: { followers }</li>}
          { location && <li className="list-group-item"> location: { location }</li>}
          { blog && <li className="list-group-item"> blog: { blog }</li>}
          { bio && <li className="list-group-item"> bio: { bio }</li>}
        </ul>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired
}

export default UserProfile
