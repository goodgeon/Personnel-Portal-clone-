import React from "react";
import styled from 'styled-components'
import DatePicker from "./DatePicker";

const ItemContainer = styled.div`
    display : flex;
    grid-column : ${(props) => props.gridColumn};
    height : 40px;
    width : 270px;
`

const Item = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #44abd9;
    width : 95px;
    height : 100%;
    text-align : center;
    color : white;
    font-weight : 400;
`


export default function DateItem(props) {
    return (
        <ItemContainer gridColumn={props.gridColumn}>
            <Item>{props.itemName}</Item>
            <DatePicker
                initialDate={props.initialDate}
                onDateChange={props.onDateChange}
                maxDate={props.maxDate}
                itemName={props.itemName}
            ></DatePicker>
        </ItemContainer>
    )
}

