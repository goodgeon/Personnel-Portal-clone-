import React, { useEffect, state } from 'react';
import request from '../functions/request';
import { useSelector, useDispatch } from "react-redux";
import { employeeActions } from "../store/reducers/employee"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { GrPlayFill } from "react-icons/gr";

const Container = styled.div`
    margin-left : 250px;
    margin-top : 20px;
    margin-right : 20px;
    // display : grid;
    // grid-template-columns: repeat(auto-fill, minmax(5%, auto));
    width : calc(100% - 270px);
`
const Header = styled.h1`
    font-size : 18px;
    display : flex;
`

const HeaderContainer = styled.div`
    margin-left : 250px;
    margin-top : 20px;
    padding : 15px 15px 0 15px;
    position : relative;
`

const RowContainer = styled.div`
    display : flex;
`

const Td = styled.td`
    border : 1px solid #f4f4f4;
    text-align : center;
    padding : 8px;
`

const Th = styled.th`
    border : 1px solid #f4f4f4;
    padding : 10px;
`
const Tr = styled.tr`
    font-weight : bold;
    background-color : #0E7EAF;
    color : white;
`
const Table = styled.table`
    width : 100%;
    border-collapse : collapse;
    border : 2px solid #f4f4f4;
`


export default function List() {
    const dispatch = useDispatch();
    const { employeeList } = useSelector((state) => state.employee)

    useEffect(async () => {
        const list = await request("http://localhost:3001/getList");
        console.log(list)
        dispatch(employeeActions.setEmployeeList(list));
    }, [])

    return (
        <>
            <HeaderContainer>
                <Header><GrPlayFill />人事記録一覧</Header>
            </HeaderContainer>
            <Container>
                {/* <RowContainer>
                    <span>社員番号</span><span>所属</span><span>名前</span><span>連絡先</span><span>メール</span>
                </RowContainer> */}
                <Table>
                    <thead>
                        <Tr>
                            <Th>社員番号</Th><Th>名前</Th><Th>所属</Th><Th>連絡先</Th><Th>メール</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {employeeList.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    {/* <Td><Link to={`/detail/${employee.employeeNo}`}>{employee.employeeNo}</Link></Td> */}
                                    <Td><Link to={{
                                        pathname: '/detail',
                                        state: { params: { employeeNo: employee.employeeNo } }
                                    }}>{employee.employeeNo}</Link></Td>
                                    <Td>{employee.lastNameKanji}{employee.firstNameKanji}</Td>
                                    <Td>{employee.departmentCategory} {employee.departmentName} {employee.unit}</Td>
                                    <Td>{employee.cellphoneNo}</Td>
                                    <Td>{employee.mailCompany}</Td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )

}

