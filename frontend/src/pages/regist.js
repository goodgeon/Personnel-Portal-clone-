import React, { Fragment, useEffect, useState } from "react";
import Employee from "../components/employee";
import Career from "../components/career";
import Identity from "../components/identity";
import { useSelector } from "react-redux";
import request from '../functions/request'
import styled from 'styled-components'
import { GrPlayFill } from "react-icons/gr";

const Container = styled.div`
    height : 100%;
    margin-left : 250px;
    margin-top : 20px;
    box-sizing: border-box;
`

const Header = styled.h1`
    font-size : 18px;
    display : flex;
`

const HeaderContainer = styled.div`
    padding : 15px 15px 0 15px;
    position : relative;
`

const FormContainer = styled.div`
    padding : 15px;
    box-sizing: border-box;
`
const Div = styled.div`
    width : 90%;
    margin-top : 100px;
    display : flex;
    justify-content : flex-end;
`
const Button = styled.button`
    background-color : ${(props) => props.color};
    border-radius : 3px;
    border : 1px solid transparent;
    border-color : ${(props) => props.color};
    padding : 6px 12px;
    font-size : 14px;
    color : white;
    font-weight : 500;
    height : 40px;
    width : 80px;
    &:hover {
        cursor : pointer
    }
    margin-left : 10px;
`

export default function Regist({ match: { params: { employeeNo } }, history }) {
    console.log(history)
    const [isUpdate, setIsUpdate] = useState();

    const [employee, setEmployee] = useState();
    useEffect(async () => {
        //path가 /modify일 경우실행
        if (employeeNo) {
            console.log("MODIFY")
            const data = await request("http://localhost:3001/getEmployee", employeeNo)

            setEmployee(data);
            setIsUpdate(true)
        } else {
            setIsUpdate(false);
        }
    }, [])

    const employeeObj = useSelector((state) => state.employee)
    const careerObj = useSelector((state) => state.career)
    const identityObj = useSelector((state) => state.identity)
    const obj = { ...employeeObj, ...careerObj, ...identityObj }

    //등록버튼 onclick
    const insert = async () => {
        console.log(obj)
        if (window.confirm("등록하시겠습니까?")) {
            let response = await request("http://localhost:3001/regist", obj);

            if (response.isSuccess) {
                alert("입력성공");
                history.push(`/list`)
            } else {
                alert("입력실패")
            }
        }
    }

    //수정버튼 onclick
    const update = async () => {
        obj.beforePassportNo = employee.passportNo;
        obj.beforeResidenceNo = employee.residenceNo;
        obj.beforeAccountNo = employee.accountNo;

        console.log(obj)
        if (window.confirm("수정하시겠습니까?")) {
            let response = await request("http://localhost:3001/udpate", obj);
            console.log(response);

            if (response.isSuccess) {
                alert("수정성공");
                history.push(`/detail/${employeeNo}`)
            } else {
                alert("수정실패")
            }
        }
    }

    //戻る버튼 onclick
    const redirect = () => {
        isUpdate ? history.push(`/detail/${employeeNo}`) : history.push('/')
    }

    return (
        < Fragment >
            <Container>
                <HeaderContainer>
                    <Header><GrPlayFill />人事記録登録</Header>
                </HeaderContainer>
                <FormContainer>
                    <ul>
                        <li>
                            <Employee employee={employee}></Employee>
                        </li>
                        <li>
                            <Career employee={employee}></Career>
                        </li>
                        <li>
                            <Identity employee={employee}></Identity>
                        </li>
                    </ul>
                    <Div>
                        <Button onClick={redirect} color="#56d177">戻る</Button>
                        <Button onClick={isUpdate ? update : insert} color="#3c8dbc">{isUpdate ? "修正" : "登録"}</Button>
                    </Div>
                </FormContainer>
            </Container>

        </Fragment >
    )
}