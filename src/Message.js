import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
          <h4>{this.props.message.author}</h4>
          <p>{this.props.message.text}</p>
      </div>
    )
  }
}
