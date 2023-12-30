import './index.css'

class MessageUser {
  render() {
    const {text} = this.props
    const message = text ? 'Welcome User' : 'Please Login'
    return <h1 className="head">{message}</h1>
  }
}

export default MessageUser
