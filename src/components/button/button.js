import styled, { css } from "styled-components";

export const Button = styled.button`
    font-weight: 600;
    font-size: clamp(14px, 2vw, 21px);
    color: #FFFFFF;
    border: solid 1px #FFFFFF;
    text-decoration: none;
    padding: 16.5px 30px;
    text-align: center;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;

    ${props => props.$blue && css`
    background: #2A7AE4;
    color: #FFFFFF;
    `}

    ${props => props.$gray && css`
    background: #9E9E9E;
    color: #000000E5;

    `}
`