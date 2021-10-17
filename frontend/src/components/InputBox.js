import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    margin-left : 7px;
    height : 80%;
    width : 60%;
    box-sizing : border-box;
`

const Input = styled.input`
    width : 100%;
    height : 100%;
    box-sizing : border-box;
    border : 1px solid #e8e8e8;
`


export default function InputBox(props) {

    useEffect(() => {
        console.log("oiajeg")
        setValue(props.value);
        //수정할때 원래값 dispatch => 수정하면 onblur실행해서 dispatch
        props.dispatchValue(props.value);
    }, [props.value])

    const onBlur = (e) => {
        console.log(e.currentTarget.value)
        props.dispatchValue(e.currentTarget.value)
    }


    const onChange = (e) => {
        setValue(e.currentTarget.value);
    }
    const [value, setValue] = useState();


    return (
        <Container>
            <Input type="text" onBlur={onBlur} value={value} onChange={onChange} disabled={props.disabled}></Input>
        </Container>
    )
}

