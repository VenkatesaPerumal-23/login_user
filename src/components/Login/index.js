import './index.css'

class LoginUser {
  render() {
    const {login} = this.props
    return (
      <button className="button" type="button" onClick={login}>
        Login
      </button>
    )
  }
}

export default LoginUser
