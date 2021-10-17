import React, { state, useEffect, useState } from 'react';
import { formatDate } from "../functions/util"
import request from "../functions/request"
import { useSelector, useDispatch } from "react-redux";
import { employeeActions } from "../store/reducers/employee";
import InputItem from './InputItem';
import SelectItem from './SelectItem';
import DateItem from './DateItem';
import styled from 'styled-components'
import SelectBox from './SelectBox';


const Container = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, auto));
    grid-template-rows: repeat(auto-fill, minmax(40px, auto));
    row-gap : 10px;
    column-gap : 15px;
    min-height : 100%;
`
const ContactType = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #44abd9;
    color : white;
    font-weight : 400;
    width : 90px;
    grid-row : ${(props) => props.gridRow}
`


export default function Employee(props) {
    const [employee, setEmployee] = useState();


    useEffect(() => {
        setEmployee(props.employee);
    }, [props])

    const { departmentCategoryList, departmentNameList, unitList } = useSelector((state) => state.employee)
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(employeeActions.setBirthdate(formatDate(new Date())));
        dispatch(employeeActions.setJoinDate(formatDate(new Date())));

        const list = await request("http://localhost:3001/getDepartmentCategoryList")
        dispatch(employeeActions.setDepartmentCategoryList(list));
    }, [])

    const dispatchEmployeeNo = (e) => dispatch(employeeActions.setEmployeeNo(parseInt(e)));
    const dispatchBirthdate = (e) => dispatch(employeeActions.setBirthdate(e));
    const dispatchLastNameKanji = (e) => dispatch(employeeActions.setLastNameKanji(e));
    const dispatchFirstNameKanji = (e) => dispatch(employeeActions.setFirstNameKanji(e));
    const dispatchLastNameHurigana = (e) => dispatch(employeeActions.setLastNameHurigana(e));
    const dispatchFirstNameHurigana = (e) => dispatch(employeeActions.setFirstNameHurigana(e));
    const dispatchMailCompany = (e) => dispatch(employeeActions.setMailCompany(e));
    const dispatchMailPrivate = (e) => dispatch(employeeActions.setMailPrivate(e));
    const dispatchLastNameEnglish = (e) => dispatch(employeeActions.setLastNameEnglish(e));
    const dispatchFirstNameEnglish = (e) => dispatch(employeeActions.setFirstNameEnglish(e));
    const dispatchGender = (e) => dispatch(employeeActions.setGender(e.value));
    const dispatchMynumber = (e) => dispatch(employeeActions.setMynumber(e));
    const dispatchJoinDate = (e) => dispatch(employeeActions.setJoinDate(e));
    const dispatchAddress = (e) => dispatch(employeeActions.setAddress(e));
    const dispatchPostNo = (e) => dispatch(employeeActions.setPostNo(e));
    const dispatchCellphoneNo = (e) => dispatch(employeeActions.setCellphoneNo(e));
    const dispatchPhoneNo = (e) => dispatch(employeeActions.setPhoneNo(e));
    const dispatchAddressMotherCountry = (e) => dispatch(employeeActions.setAddressMotherCountry(e));
    const dispatchPostNoMotherCountry = (e) => dispatch(employeeActions.setPostNoMotherCountry(e));
    const dispatchCellphoneNoMotherCountry = (e) => dispatch(employeeActions.setCellphoneNoMotherCountry(e));
    const dispatchPhoneNoMotherCountry = (e) => dispatch(employeeActions.setPhoneNoMotherCountry(e));
    const dispatchNameEmergency = (e) => dispatch(employeeActions.setNameEmergency(e));
    const dispatchRelationEmergency = (e) => dispatch(employeeActions.setRelationEmergency(e));
    const dispatchCellphoneNoEmergency = (e) => dispatch(employeeActions.setCellphoneNoEmergency(e));
    // const dispatchDepartmentId = (e) => dispatch(employeeActions.setDepartmentId(departmentList[e].departmentId));
    const onChangeDepartmentCategory = async (e) => {
        const list = await request("http://localhost:3001/getDepartmentNameList", e);
        dispatch(employeeActions.setDepartmentNameList(list));
    }
    const onChangeDepartmentName = async (e) => {
        const list = await request("http://localhost:3001/getUnitList", e)
        dispatch(employeeActions.setUnitList(list));
    }



    return (
        <>
            <Container>
                <InputItem dispatchValue={dispatchEmployeeNo} itemName={"社員番号"}
                    gridColumn={"1 / 4"} value={employee && employee.employeeNo} disabled={employee && true}
                />

                <SelectItem
                    itemName={"所属"}
                    options={["選択してください", ...departmentCategoryList.map((item) => item.departmentCategory)]}
                    arr={["選択してください", ...departmentCategoryList]}
                    extractSelected={onChangeDepartmentCategory}
                    gridColumn={"4 / 7"}
                    defaultValue={employee && employee.departmentCategory}
                ></SelectItem>

                <SelectBox
                    options={["選択してください", ...departmentNameList.map((item) => item.departmentName)]}
                    extractSelected={onChangeDepartmentName}
                ></SelectBox>

                <SelectBox
                    options={["選択してください", ...unitList.map((item) => item.unit)]}
                ></SelectBox>

                <DateItem itemName={"入社日"}
                    initialDate={employee ? employee.joinDate : formatDate(new Date())}
                    onDateChange={dispatchJoinDate}
                    maxDate={formatDate(new Date())}
                    gridColumn={"7 / 10"}
                ></DateItem>

                <DateItem itemName={"生年月日"}
                    initialDate={employee ? employee.birthdate : formatDate(new Date())}
                    onDateChange={dispatchBirthdate}
                    maxDate={formatDate(new Date())}
                    gridColumn={"1 / 4"}></DateItem>

                <SelectItem itemName={"性別"} options={['選択', '男性', '女性']}
                    extractSelected={dispatchGender} gridColumn={"4/7"}
                    defaultValue={employee && employee.gender}
                />

                <InputItem dispatchValue={dispatchLastNameKanji} itemName={"姓(漢字)"} gridColumn={"1/4"} gridRow={"4/5"} value={employee && employee.lastNameKanji} />
                <InputItem dispatchValue={dispatchFirstNameKanji} itemName={"名(漢字)"} gridColumn={"4/7"} gridRow={"4/5"} value={employee && employee.firstNameKanji} />

                <InputItem dispatchValue={dispatchLastNameHurigana} itemName={"姓(フリガナ)"} gridColumn={"1/4"} gridRow={"5/6"} value={employee && employee.lastNameHurigana} />
                <InputItem dispatchValue={dispatchFirstNameHurigana} itemName={"名(フリガナ)"} gridColumn={"4/7"} gridRow={"5/6"} value={employee && employee.firstNameHurigana} />

                <InputItem dispatchValue={dispatchLastNameEnglish} itemName={"姓(英語)"} gridColumn={"1/4"} gridRow={"6/7"} value={employee && employee.lastNameEnglish} />
                <InputItem dispatchValue={dispatchFirstNameEnglish} itemName={"名(英語)"} gridColumn={"4/7"} gridRow={"6/7"} value={employee && employee.firstNameEnglish} />

                <InputItem dispatchValue={dispatchMynumber} itemName={"マイナンバー"} gridRow={"8/9"} value={employee && employee.mynumber} />
                <InputItem dispatchValue={dispatchMailCompany} itemName={"メール(会社)"} gridColumn={"4/7"} gridRow={"8/9"} value={employee && employee.mailCompany} />
                <InputItem dispatchValue={dispatchMailPrivate} itemName={"メール(個人)"} gridColumn={"7/10"} gridRow={"8/9"} value={employee && employee.mailPrivate} />

                <ContactType gridColumn={"1/2"} gridRow={"9/11"}>日本連絡先</ContactType>
                <InputItem dispatchValue={dispatchPostNo} itemName={"(〒)"} gridColumn={"2/4"} gridRow={"9/10"} value={employee && employee.postNo} />
                <InputItem dispatchValue={dispatchAddress} itemName={"住所"} gridColumn={"2/4"} gridRow={"10/11"} value={employee && employee.address} />
                <InputItem dispatchValue={dispatchCellphoneNo} itemName={"携帯"} gridColumn={"5/6"} gridRow={"9/10"} value={employee && employee.cellphoneNo} />
                <InputItem dispatchValue={dispatchPhoneNo} itemName={"自宅"} gridColumn={"5/6"} gridRow={"10/11"} value={employee && employee.phoneNo} />

                <ContactType gridColumn={"1/2"} gridRow={"11/13"}>母国連絡先</ContactType>
                <InputItem dispatchValue={dispatchPostNoMotherCountry} itemName={"(〒)"} gridColumn={"2/4"} gridRow={"11/12"} value={employee && employee.postNoMotherCountry} />
                <InputItem dispatchValue={dispatchAddressMotherCountry} itemName={"住所"} gridColumn={"2/4"} gridRow={"12/13"} value={employee && employee.addressMotherCountry} />
                <InputItem dispatchValue={dispatchCellphoneNoMotherCountry} itemName={"携帯(家族)"} gridColumn={"5/6"} gridRow={"11/12"} value={employee && employee.cellphoneNoMotherCountry} />
                <InputItem dispatchValue={dispatchPhoneNoMotherCountry} itemName={"自宅"} gridColumn={"5/6"} gridRow={"12/13"} value={employee && employee.phoneNoMotherCountry} />

                <ContactType gridColumn={"1/2"} gridRow={"13/14"}>緊急連絡先</ContactType>
                <InputItem dispatchValue={dispatchNameEmergency} itemName={"名前"} gridColumn={"2/5"} gridRow={"13/14"} value={employee && employee.nameEmergency} />
                <InputItem dispatchValue={dispatchRelationEmergency} itemName={"関係"} gridColumn={"5/8"} gridRow={"13/14"} value={employee && employee.relationEmergency} />
                <InputItem dispatchValue={dispatchCellphoneNoEmergency} itemName={"連絡先"} gridColumn={"8/11"} gridRow={"13/14"} value={employee && employee.cellphoneNoEmergency} />
            </Container>

        </>
    )

}

