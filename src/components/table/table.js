import styled from "styled-components";

export const Table = styled.table`
    border: solid 4px #2a7ae4;
    font-family: Roboto, sans-serif;
    color: #f5f5f5;
    text-align: left;
    border-collapse:collapse;
    font-weight: 400;
    width: 100%;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        visibility: collapse;
    }
`

export const Th = styled.th`
    border: solid 4px #2a7ae4;
    font-size: clamp(16px, 2vw,35px) ;
    padding: 10px;
`

export const Tbody = styled.tbody`

`

export const Td = styled.td`
    padding: 10px;
    box-shadow: 0px 0px 1px 2px #101010 inset;
    font-size: clamp(12px, 2vw,27px);
`

export const Tr = styled.tr`
    
`