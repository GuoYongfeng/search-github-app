import React, { Component } from 'react'

class Notes extends Component {
  render(){
    return (
      <h1> this is Notes.message: { this.props.username }</h1>
    )
  }
}

export default Notes
