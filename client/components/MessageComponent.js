import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Input, Button, List } from 'semantic-ui-react'

import { postMessageAction, getMessagesAction } from 'Utilities/redux/messageReducer'

const MessageComponent = ({ messages, postMessage, getMessages }) => {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getMessages()
  }, [messages.length])

  return (
    <div style={{ paddingTop: '1em' }}>
      <Input id="message" value={message} onChange={e => setMessage(e.target.value)} />
      <Button color="purple" onClick={() => postMessage(message)}>
        Send!
      </Button>
      <div data-cy="messagelist">
        <List>
          {messages.map(m => (
            <List.Item key={m.id}>{m.content}</List.Item>
          ))}
        </List>
      </div>
    </div>
  )
}

const mapStateToProps = ({ messages }) => ({
  messages: messages.data.sort((a, b) => a.content.localeCompare(b.content)),
})

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessageAction({ message })),
  getMessages: () => dispatch(getMessagesAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageComponent)
