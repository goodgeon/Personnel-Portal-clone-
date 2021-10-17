import React, { state, useEffect, useState } from 'react';
import InputBox from './InputBox';
import DatePicker from './DatePicker'
import { formatDate } from '../functions/util'
import { useSelector, useDispatch } from "react-redux";
import { identityActions } from "../store/reducers/identity";
import styled from "styled-components"
import InputItem from "./InputItem"
import DateItem from "./DateItem"

const Container = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    row-gap : 10px;
    column-gap : 15px;
    margin-top : 30px;
`


export default function Identity(props) {
    const dispatch = useDispatch();

    const [employee, setEmployee] = useState();
    useEffect(() => {
        setEmployee(props.employee);
    }, [props])

    useEffect(async () => {
        dispatch(identityActions.setPassportExpirationDate(formatDate(new Date())));
        dispatch(identityActions.setResidenceDeliveryDate(formatDate(new Date())));
        dispatch(identityActions.setResidenceExpirationDate(formatDate(new Date())));
    }, [])

    const dispatchPassportNo = (e) => {
        dispatch(identityActions.setPassportNo(e));
    }
    const dispatchPassportExpirationDate = (e) => {
        dispatch(identityActions.setPassportExpirationDate(e));
    }
    const dispatchPassportCountry = (e) => {
        dispatch(identityActions.setPassportCountry(e));
    }
    const dispatchResidenceNo = (e) => {
        dispatch(identityActions.setResidenceNo(e));
    }
    const dispatchResidenceDeliveryDate = (e) => {
        dispatch(identityActions.setResidenceDeliveryDate(e));
    }
    const dispatchResidenceCategory = (e) => {
        dispatch(identityActions.setResidenceCategory(e));
    }
    const dispatchResidencePeriod = (e) => {
        dispatch(identityActions.setResidencePeriod(e));
    }
    const dispatchResidenceExpirationDate = (e) => {
        dispatch(identityActions.setResidenceExpirationDate(e));
    }
    const dispatchAccountNo = (e) => {
        dispatch(identityActions.setAccountNo(e));
    }
    const dispatchBankName = (e) => {
        dispatch(identityActions.setBankName(e));
    }
    const dispatchBranchName = (e) => {
        dispatch(identityActions.setBranchName(e));
    }
    const dispatchAccountType = (e) => {
        dispatch(identityActions.setAccountType(e));
    }
    const dispatchAccountName = (e) => {
        dispatch(identityActions.setAccountName(e));
    }

    return (
        <>
            <Container>
                {/* <div style={{ backgroundColor: 'cornflowerblue', textAlign: 'center' }}>身分証明証情報</div> */}
                <InputItem dispatchValue={dispatchPassportNo} itemName={"パスポート番号"} gridColumn={"1/4"} value={employee && employee.passportNo} />
                <DateItem
                    initialDate={employee ? employee.passportExpirationDate : formatDate(new Date())}
                    onDateChange={dispatchPassportExpirationDate}
                    maxDate={formatDate(new Date())}
                    itemName={"パスポート有効期間"}
                    gridColumn={"4 / 7"}
                ></DateItem>
                <InputItem dispatchValue={dispatchPassportCountry} itemName={"パスポート発行国"} gridColumn={"7 / 10"} value={employee && employee.passportCountry} />
                <InputItem dispatchValue={dispatchResidenceNo} itemName={"在留カード番号"} gridColumn={"1 / 4"} value={employee && employee.residenceNo} />
                <DateItem
                    initialDate={employee ? employee.residenceDeliveryDate : formatDate(new Date())}
                    onDateChange={dispatchResidenceDeliveryDate}
                    maxDate={formatDate(new Date())}
                    itemName={"交付年月日"}
                    gridColumn={"4 / 7"}
                ></DateItem>
                <InputItem dispatchValue={dispatchResidenceCategory} itemName={"在留資格"} gridColumn={"7 / 10"} value={employee && employee.residenceCategory} />
                {/* <InputBox name="メール(会社)" dispatchValue={dispatchMailCompany}></InputBox>
                            <InputBox name="メール(個人)" dispatchValue={dispatchMailPrivate}></InputBox> */}
                <InputItem dispatchValue={dispatchResidencePeriod} itemName={"在留期間"} gridColumn={"1 / 4"} value={employee && employee.residencePeriod} />
                <DateItem
                    initialDate={employee ? employee.residenceExpirationDate : formatDate(new Date())}
                    onDateChange={dispatchResidenceExpirationDate}
                    maxDate={formatDate(new Date())}
                    itemName={"在留期限"}
                    gridColumn={"4 / 7"}
                ></DateItem>
                <InputItem dispatchValue={dispatchAccountNo} itemName={"口座番号"} gridColumn={"1 / 4"} value={employee && employee.accountNo} />
                <InputItem dispatchValue={dispatchBankName} itemName={"銀行名"} gridColumn={"4 / 7"} value={employee && employee.bankName} />
                <InputItem dispatchValue={dispatchBranchName} itemName={"支店名"} gridColumn={"1 / 4"} value={employee && employee.branchName} />
                <InputItem dispatchValue={dispatchAccountType} itemName={"種類"} gridColumn={"4 / 7"} value={employee && employee.accountType} />
                <InputItem dispatchValue={dispatchAccountName} itemName={"名義"} gridColumn={"7 / 10"} value={employee && employee.accountName} />
            </Container>
        </>
    )

}

