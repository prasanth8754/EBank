import {HomeBgCont, MainHeading, HomeImg} from './styledComponents'
import Header from '../Header'

const Home = props => {
  return (
    <HomeBgCont>
      <Header />
      <MainHeading>Your Flexibility, Our Excellence</MainHeading>
      <HomeImg
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </HomeBgCont>
  )
}

export default Home
