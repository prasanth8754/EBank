import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Navbar, WebLogo, LogoutBtn} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <Navbar>
      <WebLogo
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <LogoutBtn type="button" onClick={onClickLogout}>
        Logout
      </LogoutBtn>
    </Navbar>
  )
}

export default withRouter(Header)
