import React, { Component } from 'react'

class Notes extends Component {
  render(){
    return (
      <h3 className="text-center"> 对{ this.props.username } 说：</h3>
    )
  }
}

export default Notes
