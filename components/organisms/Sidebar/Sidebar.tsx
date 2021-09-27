import React from 'react'
import styled from '@emotion/styled'
import { SettingIcon } from '../../../icons/SettingIcon'

const Container = styled.div`
 max-width: 50rem;
 height: 100vh;
 width: 20rem;
 background: #fff;
 border-right: 1px solid rgba(255,255,255,.1);
`
const List = styled.ul`
 
`
const Link = styled.li`
 font-weight: 300;
 dispay: flex;
 justify-content: center;
 padding: 1.5rem 0 1.5rem 2rem;
 width: 100%;
 border-radius: 5px;
 &:hover{
    background: #e8f1ff;
 }
`


export const Sidebar = () => {
    return (
        <Container>
            <List>
                <Link><SettingIcon size="2rem" /> Home</Link>
                <Link><SettingIcon size="2rem" /> Home</Link>
                <Link><SettingIcon size="2rem" /> Home</Link>
                <Link><SettingIcon size="2rem" /> Home</Link>
                <Link><SettingIcon size="2rem" /> Home</Link>
                <Link><SettingIcon size="2rem" /> Home</Link>
            </List>
        </Container>
    )
}

