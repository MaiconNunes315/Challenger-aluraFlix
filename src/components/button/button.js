import styled, { css } from "styled-components";

export const Button = styled.button`
    font-weight: 600;
    font-size: 21px;
    color: #FFFFFF;
    border: solid 1px #FFFFFF;
    text-decoration: none;
    padding: 16.5px 30px;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;
    z-index: 1;

    &:hover{
        color: gray;
    }

  
@media screen and (max-width:900px) {

    padding: 5px 30px;
}

    ${props => props.$blue && css`
    background: #2A7AE4;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;

    &:hover{
    color:#FFFFFF;
    background-color: #0762da;
    }
    `}

    ${props => props.$gray && css`
    background: #9E9E9E;
    color: #000000E5;
    border: none;
    border-radius: 4px;

    &:hover{
    color:#000000E5;
    background-color: gray;
    }
    `}
`