import React, { useEffect, useRef } from "react";
import styled from 'styled-components'

const Container = styled.div`
  margin-left : 10px;
`

const Select = styled.select`
  height : 100%;
  min-width : 100px;
`

export default function SelectBox(props) {
  const selectedValue = useRef(null);

  useEffect(() => {
    //수정할때 초기값 dispatch 
    props.options.map((item, i) => {
      props.defaultValue && props.defaultValue === item && select({
        index: i,
        value: item
      })
    })
  }, [props.defaultValue])

  const onChange = (e) => {
    console.log(e.currentTarget.value);
    select({
      index: e.currentTarget.selectedIndex,
      value: e.currentTarget.value,
      // data: props.data ?? "",
    });
  };

  const select = (e) => {
    console.log(e);

    if (props.extractSelected) {
      props.extractSelected(e.value);
    }
  };

  useEffect(() => {
    if (props.clearOnDisabled === true && props.disabled === true) {
      select({ index: 0, value: "" });
      selectedValue.current.selectedIndex = 0;
    }
  }, [props.clearOnDisabled, props.disabled]);

  useEffect(() => {
    if (props.selected?.index >= 0) {
      console.log("selectedIndex", selectedValue.current.selectedIndex);
      selectedValue.current.selectedIndex = props.selected.index;
    } else if (!isNaN(props.selected)) {
      selectedValue.current.selectedIndex = props.selected;
    }
  }, [props.selected]);

  useEffect(() => {
    if (props.resetByOp) {
      //   console.log('awgewaegweg')
      select({ index: 0, value: "" })
      selectedValue.current.selectedIndex = 0;
    }
  }, [props.resetByOp])


  return (
    <Container>
      <Select
        className="Select-Box"
        onChange={onChange}
        disabled={props.disabled}
        ref={selectedValue}
      >
        {props.options.map((item, i) => {

          return (
            <option key={i} index={i} selected={props.defaultValue && props.defaultValue === item ? true : false}>
              {item}
            </option>
          );
        })}
      </Select>
    </Container>
  );
}
