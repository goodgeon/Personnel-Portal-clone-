import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerTop = styled.div`
    display : flex;
`
const Nav = styled.div`
    background-color : #f39c12;
    align-item : center;
    min-height : 50px;
    width : 100%;
`

const IconContainer = styled.span`
    box-sizing : border-box;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #e08e0b;
    width : 230px;
    height : 50px;
`

const IconImg = styled.img`
    height : 40px;
    vertical-align : top;
    margin-bottom : 10px;
    padding : 5px;
`
const Portal = styled.span`
    font-weight : bold;
    color : white;
    font-style : italic;
    font-size : 24px;
`

// const Ul = styled.ul`
//     margin-left : 10px;
//     display : flex;
//     height : 50px;
// `
// const Li = styled.li`
//     margin-right : 30px;
//     padding : 0 0 0 20px;
//     font-weight : bold;
//     color : white;
//     height : 100%
// `

const SLink = styled(Link)`
    &:hover {
        background-color : #e08e0b;
    };
    display : flex;
    align-items : center;
    height : 100%;
`
export default function Navbar(props) {
    return (
        <ContainerTop>
            <SLink to="/">
                <IconContainer>
                    <IconImg src="https://portal.ais-info.co.jp/images/common/logo.png" />
                    <Portal>portal</Portal>
                </IconContainer>
            </SLink>
            <Nav>
                {/* <Ul>
                        <Li>
                            <SLink to="/">ダッシュボード</SLink>
                        </Li>
                        <Li>
                            <SLink to="/regist">人事記録登録</SLink>
                        </Li>
                        <Li>
                            <SLink to="/list">人事記録一覧</SLink>
                        </Li>
                    </Ul> */}
            </Nav>
        </ContainerTop>
    )
}

