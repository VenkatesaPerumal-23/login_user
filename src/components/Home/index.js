import {Component} from 'react'

import MessageUser from '../Message'
import LoginUser from '../Login'
import LogoutUser from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogged: true}

  loggedOn = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg-container">
        <div className="authenticate-container">
          <MessageUser text={isLogged} />
          {isLogged ? (
            <LogoutUser logout={this.loggedOn} />
          ) : (
            <LoginUser login={this.loggedOn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
