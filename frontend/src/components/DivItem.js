import React from "react";
import styled from 'styled-components'

const ItemContainer = styled.div`
    display : flex;
    align-items : center;
    width : 270px;
    height : 40px;
    grid-column : ${(props) => props.gridColumn};
    grid-row : ${(props) => props.gridRow};
    border : 1px solid #e8e8e8;
    box-sizing : border-box;
`
const Item = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #44abd9;
    width : 95px;
    height : 100%;
    min-width : 70px;
    text-align : center;
    color : white;
    font-weight : 400;
    padding : 4px;
    box-sizing : border-box;
`

const Data = styled.div`
    margin-left : 3px;
`



export default function DivItem(props) {
    return (
        <ItemContainer gridColumn={props.gridColumn} gridRow={props.gridRow}>
            <Item>{props.itemName}</Item>
            <Data>{props.data}</Data>
        </ItemContainer>
    )
}

