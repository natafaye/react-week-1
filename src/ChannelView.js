import React, { Component } from 'react'
import Message from './Message'

export default class ChannelView extends Component {
  render() {

    const channel = {
        name: "random",
        messages: [
            {
                id: 0,
                author: "Natalie",
                text: "Hey y'all!"
            },
            {
                id: 1,
                author: "Cassie",
                text: "Hi!"
            },
            {
                id: 2,
                author: "Natalie",
                text: "What's up?"
            }
        ]
    }

    // hack for getting unique ids
    // channel.messages[channel.messages.length - 1].id + 1

    // const newMessage = {
    //     id: channel.messages[channel.messages.length - 1].id + 1
    // }

    return (
      <div>
          <h3>#{ channel.name }</h3>
          { channel.messages.map(message => <Message key={message.id} message={message} />) }
      </div>
    )
  }
}
