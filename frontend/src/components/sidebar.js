import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { MdDashboard } from 'react-icons/md';
import { FiUpload, FiList } from "react-icons/fi";


const Container = styled.div`
    width : 230px;
    min-height : 100vh;
    height : 100%;
    position : absolute;
    background-color : #222d32;
    color : #b8c7ce;
`

const Ul = styled.ul`
`
const Li = styled.li`
`

const SLink = styled(Link)`
    padding : 12px 5px 12px 15px;
    box-sizing: border-box;
    display : flex;
    border-left : ${(props) => props.current === true ? "3px solid #f39c12" : "transparent"};
    background-color : ${(props) => props.current === true ? "#1e282c" : "#222d32"};
    color : ${(props) => props.current === true ? "white" : "#b8c7ce"};
    &:hover {
        background-color : #1e282c;
        color : white;
    };
`

const DashboardIcon = styled(MdDashboard)`
    margin-right : 10px;
    width : 15px;
    height : 15px;
`

const RegistIcon = styled(FiUpload)`
    margin-right : 10px;
`

const ListIcon = styled(FiList)`
    margin-right : 10px;
`




export default withRouter(({ location: { pathname } }) => {

    return (
        <Container>
            <Ul>
                <Li>
                    <SLink to='/' current={pathname === '/'}>
                        <DashboardIcon />ダッシュボード
                    </SLink>
                </Li>
                <Li>
                    <SLink to='/regist' current={pathname === '/regist'}>
                        <RegistIcon />人事記録登録
                    </SLink>
                </Li>
                <Li>
                    <SLink to='/list' current={pathname === '/list'}>
                        <ListIcon />人事記録一覧
                    </SLink>
                </Li>
            </Ul>

        </Container>
    )

})

