import React from 'react';
import styled from '@emotion/styled';
import { Sidebar } from './Sidebar/Sidebar';
import { Navbar } from './Navbar';

const Content = styled.div`
 display: flex;
 flex-direction: row;
`

const Page = styled.div`
 flex: 9;
 display: flex;
 flex-direction: column;
`

const Side = styled.div`
 flex: 1;
`


export const Container = ({ children }) => {
    return (
        <Content>
            <Side>
                <Sidebar />
            </Side>
            <Page>
                <Navbar />
                {children}
            </Page>
        </Content>
    )
}
