import React, { state, useEffect, useState } from 'react';
import InputBox from './InputBox';
import { useSelector, useDispatch } from "react-redux";
import { careerActions } from "../store/reducers/career";
import { formatDate } from "../functions/util"
import DatePicker from "./DatePicker"
import styled from "styled-components"
import DateItem from './DateItem'
import InputItem from './InputItem'


const Container = styled.div`
    margin-top : 30px;
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    row-gap : 10px;
    column-gap : 15px;
`


export default function Career(props) {
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState();

    useEffect(() => {
        setEmployee(props.employee);
    }, [props])

    useEffect(async () => {
        dispatch(careerActions.setGraduationDate(formatDate(new Date())));
        dispatch(careerActions.setEducationStartDate(formatDate(new Date())));
        dispatch(careerActions.setCareerJoinDate(formatDate(new Date())));
        dispatch(careerActions.setCareerExitDate(formatDate(new Date())));
    }, [])

    const dispatchGraduationDate = (e) => {
        console.log(e)
        dispatch(careerActions.setGraduationDate(e));
    }
    const dispatchSchool = (e) => {
        dispatch(careerActions.setSchool(e));
    }
    const dispatchMajor = (e) => {
        dispatch(careerActions.setMajor(e));
    }
    const dispatchEducationStartDate = (e) => {
        dispatch(careerActions.setEducationStartDate(e));
    }
    const dispatchInstitutionName = (e) => {
        dispatch(careerActions.setInstitutionName(e));
    }
    const dispatchCourseName = (e) => {
        dispatch(careerActions.setCourseName(e));
    }
    const dispatchCareerJoinDate = (e) => {
        dispatch(careerActions.setCareerJoinDate(e));
    }
    const dispatchCareerExitDate = (e) => {
        dispatch(careerActions.setCareerExitDate(e));
    }
    const dispatchCompanyName = (e) => {
        dispatch(careerActions.setCompanyName(e));
    }
    const dispatchPosition = (e) => {
        dispatch(careerActions.setPosition(e));
    }
    const dispatchTask = (e) => {
        dispatch(careerActions.setTask(e));
    }
    const dispatchIsAbroad = (e) => {
        dispatch(careerActions.setIsAbroad(e));
    }


    return (
        <>
            {/* <div style={{ backgroundColor: 'cornflowerblue', textAlign: 'center', marginTop: '15px' }}>??????</div> */}
            <Container>
                <DateItem
                    initialDate={employee ? employee.graduationDate : formatDate(new Date())}
                    onDateChange={dispatchGraduationDate}
                    maxDate={formatDate(new Date())}
                    itemName={"?????????"}
                    gridColumn={"1/4"}
                ></DateItem>
                <InputItem dispatchValue={dispatchSchool} itemName={"?????????"} gridColumn={"4/7"} value={employee && employee.school} />
                <InputItem dispatchValue={dispatchMajor} itemName={"??????"} gridColumn={"7/10"} value={employee && employee.major} />
                <DateItem
                    initialDate={employee ? employee.educationStartDate : formatDate(new Date())}
                    onDateChange={dispatchEducationStartDate}
                    maxDate={formatDate(new Date())}
                    itemName={"?????????"}
                    gridColumn={"1/4"}
                ></DateItem>
                <InputItem dispatchValue={dispatchInstitutionName} itemName={"?????????"} gridColumn={"4/7"} value={employee && employee.institutionName} />
                <InputItem dispatchValue={dispatchCourseName} itemName={"???????????????"} gridColumn={"7/10"} value={employee && employee.courseName}></InputItem>
                {/* <InputBox name="?????????(??????)" dispatchValue={dispatchMailCompany}></InputBox>
                            <InputBox name="?????????(??????)" dispatchValue={dispatchMailPrivate}></InputBox> */}
                <DateItem
                    initialDate={employee ? employee.careerJoinDate : formatDate(new Date())}
                    onDateChange={dispatchCareerJoinDate}
                    maxDate={formatDate(new Date())}
                    itemName={"?????????"}
                    gridColumn={"1/4"}
                ></DateItem>
                <DateItem
                    initialDate={employee ? employee.careerExitDate : formatDate(new Date())}
                    onDateChange={dispatchCareerExitDate}
                    maxDate={formatDate(new Date())}
                    itemName={"?????????"}
                    gridColumn={"4/7"}
                ></DateItem>
                <InputItem dispatchValue={dispatchCompanyName} itemName={"?????????"} gridColumn={"1/4"} value={employee && employee.companyName} />
                <InputItem dispatchValue={dispatchPosition} itemName={"????????????"} gridColumn={"4/7"} value={employee && employee.position} />
                <InputItem dispatchValue={dispatchTask} itemName={"????????????"} gridColumn={"7/10"} value={employee && employee.task} />
                <InputItem dispatchValue={dispatchIsAbroad} itemName={"??????(??????/??????)"} gridColumn={"1/10"} value={employee && employee.isAbroad} />
            </Container>
        </>
    )

}

