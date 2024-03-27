import styled from 'styled-components'
// {BgCont, Cont, LoginImg, Form,Heading, Input,Button,ErrorPara}

export const BgCont = styled.div`
    background-color:#152850;
    min-height:100vh;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const Cont = styled.div`
    background-color:#e0eefe;
    width:80%;
    align-self:center;
    display:flex;
    justify-content:space-between;
    border-radius:20px;
    @media screen and (min-width:992px){
        width:60%
    }
`
export const LoginImg = styled.img`
    width:50%;
    margin-top:100px;
    margin-bottom:100px;
    @media screen and (min-width:992px){
        width:45%
    }
`
export const Form = styled.form`
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:50%;
    padding:15px;
    border-radius:20px;
    @media screen and (min-width:992px){
        width:45%
    }
`
export const Heading = styled.h1`
    color:${props => (props.label ? '#5a7184' : '#152850')};
    font-size:${props => (props.label ? '18px' : '30px')};
    font-weight:bold;
`
export const Input = styled.input`
    border:1px solid #5a7184;
    outline:none;
    background:transparent;
    border-radius:6px;
    width:100%;
    height:45px;
    padding-left:15px;
    margin-top:8px;
    margin-bottom:20px;
`
export const Button = styled.button`
    background-color:#1565d8;
    border:0px;
    width:100%;
    height:40px;
    border-radius:5px;
    cursor:pointer;
    color:#ffffff;
    font-weight:bold;
    margin-top:20px;
`
export const ErrorPara = styled.p`
    color:#ff0b37;
    text-align:center;
    font-size:15px;
`
