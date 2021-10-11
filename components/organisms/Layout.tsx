import React from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { useRouter } from 'next/router'
import { Navbar } from './Navbar';
import styled from '@emotion/styled';


const Box = styled.div`
 display: flex;
`


export const Layout = ({ children }) => {
    const router = useRouter();
    const renderPage = () => {
        if ((router.pathname !== '/login') && (router.pathname !== '/signup')) {
            return <Box>
                <Sidebar />
                <Navbar />
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
