import {NotFoundCont, NotFoundImg, NotFoundHeading} from './styledComponents'

const NotFound = props => (
  <NotFoundCont>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundHeading as="p" para>
      We are sorry, the page you requested could not be found.
    </NotFoundHeading>
  </NotFoundCont>
)

export default NotFound
