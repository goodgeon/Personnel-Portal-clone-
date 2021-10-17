import React, { state } from 'react';
import styled from 'styled-components'
const Container = styled.div`
    margin-left : 250px;
    margin-top : 20px;
`
const Title = styled.div`
    font-weight : bold;
    font-size : 30px;
`

export default function Dashboard() {

    return (
        <>
            <Container>
                <Title>ダッシュボード</Title>
            </Container>
        </>
    )

}

