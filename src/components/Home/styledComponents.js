import styled from 'styled-components'
import {BgCont, Heading, LoginImg} from '../Login/styledComponents'

// MainHeading, HomeImg

export const HomeBgCont = styled(BgCont)`
    justify-content:flex-start;
    padding:20px;
`
export const MainHeading = styled(Heading)`
    color:#ffffff;
    text-align:center;
`
export const HomeImg = styled(LoginImg)`
    width:80%
    align-self:center;
    margin:auto;
    margin-top:0px;
    margin-bottom:0px;
    @media screen and (min-width:992px){
        width:40%;
    }
`
