import React, { state, useEffect, useState } from 'react';
import InputBox from './InputBox';
import DatePicker from './DatePicker'
import { formatDate } from '../functions/util'
import { useSelector, useDispatch } from "react-redux";
import { identityActions } from "../store/reducers/identity";
import styled from "styled-components"
import InputItem from "./InputItem"
import DateItem from "./DateItem"
import DivItem from './DivItem';

const Container = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    row-gap : 10px;
    column-gap : 15px;
    margin-top : 30px;
`


export default function DetailIdentity(props) {
    const [employee, setEmployee] = useState();

    useEffect(() => {
        setEmployee(props.employee)
    }, [])

    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(identityActions.setPassportExpirationDate(formatDate(new Date())));
        dispatch(identityActions.setResidenceDeliveryDate(formatDate(new Date())));
        dispatch(identityActions.setResidenceExpirationDate(formatDate(new Date())));
    }, [])

    const dispatchPassportNo = (e) => {
        dispatch(identityActions.setPassportNo(parseInt(e.currentTarget.value)));
    }
    const dispatchPassportExpirationDate = (e) => {
        dispatch(identityActions.setPassportExpirationDate(e.currentTarget.value));
    }
    const dispatchPassportCountry = (e) => {
        dispatch(identityActions.setPassportCountry(e.currentTarget.value));
    }
    const dispatchResidenceNo = (e) => {
        dispatch(identityActions.setResidenceNo(e.currentTarget.value));
    }
    const dispatchResidenceDeliveryDate = (e) => {
        dispatch(identityActions.setResidenceDeliveryDate(e));
    }
    const dispatchResidenceCategory = (e) => {
        dispatch(identityActions.setResidenceCategory(e.currentTarget.value));
    }
    const dispatchResidencePeriod = (e) => {
        dispatch(identityActions.setResidencePeriod(e.currentTarget.value));
    }
    const dispatchResidenceExpirationDate = (e) => {
        dispatch(identityActions.setResidenceExpirationDate(e.currentTarget.value));
    }
    const dispatchAccountNo = (e) => {
        dispatch(identityActions.setAccountNo(e.currentTarget.value));
    }
    const dispatchBankName = (e) => {
        dispatch(identityActions.setBankName(e.currentTarget.value));
    }
    const dispatchBranchName = (e) => {
        dispatch(identityActions.setBranchName(e.currentTarget.value));
    }
    const dispatchAccountType = (e) => {
        dispatch(identityActions.setAccountType(e.currentTarget.value));
    }
    const dispatchAccountName = (e) => {
        dispatch(identityActions.setAccountName(e.currentTarget.value));
    }

    return (
        <>{employee &&
            <Container>
                {/* <div style={{ backgroundColor: 'cornflowerblue', textAlign: 'center' }}>?????????????????????</div> */}
                <DivItem itemName="?????????????????????" gridColumn={"1/4"} data={employee.passportNo} />
                <DivItem itemName="???????????????????????????" gridColumn={"4 / 7"} data={employee.passportExpirationDate} />
                <DivItem itemName="????????????????????????" gridColumn={"7 / 10"} data={employee.passportCountry} />

                <DivItem itemName="?????????????????????" gridColumn={"1/4"} data={employee.residenceNo} />
                <DivItem itemName="???????????????" gridColumn={"4/7"} data={employee.residenceDeliveryDate} />
                <DivItem itemName="????????????" gridColumn={"7/10"} data={employee.residenceCategory} />
                <DivItem itemName="????????????" gridColumn={"1/4"} data={employee.residencePeriod} />
                <DivItem itemName="????????????" gridColumn={"4/7"} data={employee.residenceExpirationDate} />

                <DivItem itemName="????????????" gridColumn={"1/4"} data={employee.accountNo} />
                <DivItem itemName="?????????" gridColumn={"4/7"} data={employee.bankName} />
                <DivItem itemName="?????????" gridColumn={"1/4"} data={employee.branchName} />
                <DivItem itemName="??????" gridColumn={"4/7"} data={employee.accountType} />
                <DivItem itemName="??????" gridColumn={"7/10"} data={employee.accountName} />

            </Container>
        }
        </>
    )

}

