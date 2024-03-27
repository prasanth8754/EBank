import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BgCont,
  Cont,
  LoginImg,
  Form,
  Heading,
  Input,
  Button,
  ErrorPara,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSuccessfulResponse = jwToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwToken, {expires: 30})
    this.setState({isHavingError: false})
    history.replace('/')
  }

  onFailureResponse = errorMsg => {
    this.setState({errorMsg, isHavingError: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessfulResponse(data.jwt_token)
    } else {
      this.onFailureResponse(data.error_msg)
    }
  }

  render() {
    const {isHavingError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgCont>
        <Cont>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <Form onSubmit={this.onSubmitForm}>
            <Heading>Welcome Back!</Heading>
            <Heading as="label" label htmlFor="userid">
              User ID
            </Heading>
            <Input
              type="text"
              id="userid"
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
            />
            <Heading as="label" label htmlFor="pin">
              PIN
            </Heading>
            <Input
              type="password"
              id="pin"
              placeholder="Enter PIN"
              onChange={this.onChangePin}
            />
            <Button type="submit">Login</Button>
            {isHavingError && <ErrorPara>{errorMsg}</ErrorPara>}
          </Form>
        </Cont>
      </BgCont>
    )
  }
}

export default Login
