import React from 'react'
import styled from '@emotion/styled'
import { SettingIcon } from '../../../icons/SettingIcon'
import { PowerIcon } from '../../../icons/PowerIcon'
import { HomeIcon } from '../../../icons/HomeIcon'

const Container = styled.div`
 max-width: 50rem;
 height: 100vh;
 width: 20rem;
 background: #fff;
 border-right: 1px solid rgba(255,255,255,.1);
 position: fixed;
 left: 0;
 top: 0;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`
const List = styled.ul`
 
`
const Link = styled.li`
 font-weight: 400;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding: 1.5rem 0 1.5rem 4rem;
 width: 100%;
 border-radius: 5px;
 cursor: pointer;
 font-size: 1.3rem;
 text-transform: uppercase;
 svg{
     margin-right: 0.5rem;
 }
 &:hover{
    background: #e8f1ff;
    color: #005ce6;
    svg{
        fill: #005ce6;
    }
 }
`

const Menus = styled.div`
 display: flex;
 flex-direction: column;
`

const Logout = styled.div`
 
`


export const Sidebar = () => {
    return (
        <Container>

            <List>
                <Link><HomeIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Settings</Link>
            </List>
            <Logout>
                <Link><PowerIcon size="1.6rem" /> Logout</Link>
            </Logout>
        </Container>
    )
}

