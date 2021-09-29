import React, { ReactNode } from 'react'
import styled from '@emotion/styled';

const Container = styled.div`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: ${props => props.flexDirection};
`

interface IBox {
    children: ReactNode,
    flexDirection: string;
}

export const CenterBox = ({ children, flexDirection }: IBox) => {
    return (
        <Container flexDirection={flexDirection}>
            {children}
        </Container>
    )
}
