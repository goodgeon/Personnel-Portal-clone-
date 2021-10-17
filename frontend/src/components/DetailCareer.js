import React, { state, useEffect, useState } from 'react';
import styled from "styled-components"
import DivItem from './DivItem'


const Container = styled.div`
    margin-top : 30px;
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    row-gap : 10px;
    column-gap : 15px;
`


export default function Detailcareer(props) {
    const [employee, setEmployee] = useState();

    useEffect(async () => {
        setEmployee(props.employee);
    }, [])

    return (
        <>{employee &&
            < Container >
                <DivItem itemName="卒業日" gridColumn={"1/4"} data={employee.graduationDate} />
                <DivItem itemName="出身校" gridColumn={"4/7"} data={employee.school} />
                <DivItem itemName="専攻" gridColumn={"7/10"} data={employee.major} />

                <DivItem itemName="開始日" gridColumn={"1/4"} data={employee.educationStartDate} />
                <DivItem itemName="機関名" gridColumn={"4/7"} data={employee.institutionName} />
                <DivItem itemName="履修課程名" gridColumn={"7/10"} data={employee.courseName} />
                {/* <InputBox name="メール(会社)" dispatchValue={dispatchMailCompany}></InputBox>
                            <InputBox name="メール(個人)" dispatchValue={dispatchMailPrivate}></InputBox> */}

                <DivItem itemName="入社日" gridColumn={"1/4"} data={employee.careerJoinDate} />
                <DivItem itemName="退社日" gridColumn={"4/7"} data={employee.careerExitDate} />

                <DivItem itemName="会社名" gridColumn={"1/4"} data={employee.companyName} />
                <DivItem itemName="会社名" gridColumn={"4/7"} data={employee.position} />
                <DivItem itemName="担当業務" gridColumn={"7/10"} data={employee.task} />
                <DivItem itemName="区分(海外/国内)" gridColumn={"1/4"} data={employee.isAbroad} />
            </Container>
        }
        </>
    )

}

