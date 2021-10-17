import React, { state, useEffect, useState } from 'react';
import request from "../functions/request"
import { useSelector, useDispatch } from "react-redux";
import DivItem from './DivItem';
import styled from 'styled-components'

const Container = styled.div`
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    grid-template-rows: repeat(auto-fill, minmax(5%, auto));
    row-gap : 10px;
    column-gap : 15px;
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

export default function DetailEmployee(props) {
    const [employee, setEmployee] = useState();

    useEffect(() => {
        setEmployee(props.employee)
    }, [])




    return (
        <>{employee &&
            <Container>
                <DivItem itemName={"社員番号"}
                    gridColumn={"1/4"}
                    data={employee.employeeNo}
                />

                <DivItem itemName={"所属"}
                    gridColumn={"4 / 7"}
                    data={`${employee.departmentCategory} ${employee.departmentName} ${employee.unit}`}
                />


                <DivItem itemName={"入社日"}
                    gridColumn={"7 / 10"}
                    data={employee.joinDate}
                />

                <DivItem itemName={"生年月日"}
                    gridColumn={"1/4"}
                    data={employee.birthdate}
                />

                <DivItem itemName={"性別"}
                    gridColumn={"4 / 7"}
                    data={employee.gender}
                />

                <DivItem itemName="姓(漢字)" gridColumn={"1/4"} data={employee.lastNameKanji} />
                <DivItem itemName="姓(フリガナ)" gridColumn={"4/7"} data={employee.lastNameHurigana} />
                <DivItem itemName="姓(英語)" gridColumn={"7/10"} data={employee.lastNameEnglish} />

                <DivItem itemName="名(漢字)" gridColumn={"1/4"} data={employee.firstNameKanji} />
                <DivItem itemName="名(フリガナ)" gridColumn={"4/7"} data={employee.firstNameHurigana} />
                <DivItem itemName="名(英語)" gridColumn={"7/10"} data={employee.firstNameEnglish} />

                <DivItem itemName="マイナンバー" gridColumn={"1/4"} data={employee.mynumber} />
                <DivItem itemName="メール(会社)" gridColumn={"4/7"} data={employee.mailCompany} />
                <DivItem itemName="メール(個人)" gridColumn={"7/10"} data={employee.mailPrivate} />

                <ContactType gridRow={"6/8"}>日本連絡先</ContactType>
                <DivItem itemName="(〒)" gridColumn={"2/5"} data={employee.postNo} />
                <DivItem itemName="住所" gridColumn={"5/10"} data={employee.address} />
                <DivItem itemName="携帯" gridColumn={"2/5"} data={employee.cellphoneNo} />
                <DivItem itemName="自宅" gridColumn={"5/10"} data={employee.phoneNo} />

                <ContactType gridRow={"8/10"}>母国連絡先</ContactType>
                <DivItem itemName="(〒)" gridColumn={"2/5"} data={employee.postNoMotherCountry} />
                <DivItem itemName="住所" gridColumn={"5/10"} data={employee.addressMotherCountry} />
                <DivItem itemName="携帯" gridColumn={"2/5"} data={employee.cellphoneNoMotherCountry} />
                <DivItem itemName="自宅" gridColumn={"5/10"} data={employee.phoneNoMotherCountry} />

                <ContactType gridRow={"10/12"}>緊急連絡先</ContactType>
                <DivItem itemName="名前" gridColumn={"2/5"} data={employee.nameEmergency} />
                <DivItem itemName="関係" gridColumn={"5/8"} data={employee.relationEmergency} />
                <DivItem itemName="連絡先" gridColumn={"2/5"} data={employee.cellphoneNoEmergency} />
            </Container>
        }
        </>
    )

}

