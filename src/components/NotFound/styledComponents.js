import styled from 'styled-components'

// {NotFoundCont, NotFoundImg, NotFoundHeading}

export const NotFoundCont = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const NotFoundHeading = styled.h1`
    color:#5a7184;
    font-size:${props => (props.para ? '16px' : '28px')};
    text-align:center;
`
export const NotFoundImg = styled.img`
    width:30%;
    align-self:center;
`
