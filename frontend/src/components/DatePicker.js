import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    margin-left : 10px;
`

const Input = styled.input`
    height : 100%;
    box-sizing : border-box;
`

export default function DatePicker(props) {
  const [date, setDate] = useState();

  useEffect(() => {
    console.log(props.initialDate);
    setDate(props.initialDate);
    props.onDateChange(props.initialDate)
  }, props.initialDate)

  const onChange = (e) => {
    let targetDate = e.currentTarget.value;
    setDate(targetDate)
    props.onDateChange(targetDate);
  };

  return (
    <>
      <Container>
        <Input
          type="date"
          className="textField"
          onChange={onChange}
          defaultValue={props.initialDate}
          max={props.maxDate}
          value={date}
        ></Input>
      </Container>
    </>
  );
}