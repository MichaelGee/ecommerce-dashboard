import React from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: center;
`

export const CenterBox = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
