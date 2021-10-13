import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { useRouter } from 'next/router'
import { Navbar } from './Navbar';
import styled from '@emotion/styled';
import { Container } from './Container';


const Box = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
 padding-top: 6rem;
}
`


export const Layout = ({ children }) => {
    const router = useRouter();
    const renderPage = () => {
        if ((router.pathname !== '/login') && (router.pathname !== '/signup')) {
            return <Box>
                <Container>
                    {children}
                </Container>
            </Box>
        }
    }
    return (
        <div>
            {renderPage()}
            {children}
        </div>
    )
}
