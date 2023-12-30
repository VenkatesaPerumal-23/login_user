import './index.css'

class LogoutUser {
  render() {
    const {logout} = this.props
    return (
      <button className="button" type="button" onClick={logout}>
        Logout
      </button>
    )
  }
}

export default LogoutUser
