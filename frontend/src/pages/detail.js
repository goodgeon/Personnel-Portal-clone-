import React, { useEffect, useState } from 'react';
import DetailEmployee from '../components/DetailEmployee'
import DetailCareer from '../components/DetailCareer'
import DetailIdentity from "../components/DetailIdentity";
import styled from 'styled-components'
import request from "../functions/request"
import { GrPlayFill } from "react-icons/gr";

const Container = styled.div`
    margin-left : 250px;
    margin-top : 20px;
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

export default function Detail({ match, history, location }) {
    useEffect(() => {
        console.log(match)
        console.log(history);
        console.log(location.state.params.employeeNo)
    }, [match])

    const [employee, setEmployee] = useState();

    useEffect(async () => {
        const data = await request("http://localhost:3001/getEmployee", location.state.params.employeeNo)
        setEmployee(data);
    }, [])

    const onUpdate = () => {
        history.push(`/modify/${employee.employeeNo}`)
    }

    const onDelete = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            let resolve = await request("http://localhost:3001/deleteEmployee", location.state.params.employeeNo);

            if (resolve.isSuccess) {
                alert("삭제성공");
                history.push("/list")
            } else {
                alert("삭제실패")
            }
        }
    }

    return (
        <>{employee &&
            <Container>
                <HeaderContainer>
                    <Header><GrPlayFill />人事記録照会</Header>
                </HeaderContainer>
                <FormContainer>
                    <ul>
                        <li>
                            <DetailEmployee employee={employee}></DetailEmployee>
                        </li>
                        <li>
                            <DetailCareer employee={employee}></DetailCareer>
                        </li>
                        <li>
                            <DetailIdentity employee={employee}></DetailIdentity>
                        </li>
                    </ul>
                </FormContainer>
                {/* <Button><Link to={`/modify/${employee.employeeNo}`}>修正</Link></Button> */}
                <Div>
                    <Button onClick={onDelete} color="#eb4c34">削除</Button>
                    <Button onClick={onUpdate} color="#3c8dbc">修正</Button>
                </Div>
            </Container>
        }
        </>
    )
}