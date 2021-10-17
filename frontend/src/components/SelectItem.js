import React from "react";
import styled from 'styled-components'
import SelectBox from './SelectBox'

const ItemContainer = styled.div`
    display : flex;
    height : 40px;
    grid-column : ${(props) => props.gridColumn}
`
const Item = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #44abd9;
    height : 100%;
    width : 95px;
    text-align : center;
    color : white;
    font-weight : 400;
`


export default function SelectItem(props) {
    return (
        <ItemContainer gridColumn={props.gridColumn}>
            <Item>{props.itemName}</Item>
            <SelectBox
                options={props.options}
                extractSelected={props.extractSelected}
                defaultValue={props.defaultValue}
            ></SelectBox>
        </ItemContainer>
    )
}

