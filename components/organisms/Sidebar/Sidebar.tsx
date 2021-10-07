import React from 'react'
import styled from '@emotion/styled'
import { SettingIcon } from '../../../icons/SettingIcon'
import { PowerIcon } from '../../../icons/PowerIcon'
import { HomeIcon } from '../../../icons/HomeIcon'
import { UploadIcon } from '../../../icons/UploadIcon'
import { signOut } from 'firebase/auth';
import { auth } from '../../../pages/api/auth/firebase';
import { useRouter } from 'next/router'

const Container = styled.div`
 max-width: 50rem;
 height: 100vh;
 width: 20rem;
 background: #21295C;
 border-right: 1px solid rgba(255,255,255,.1);
 position: fixed;
 left: 0;
 top: 0;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding-top: 4rem;
`
const List = styled.ul`
 
`
const Link = styled.li`
 font-weight: 500;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 padding: 1.5rem 0 1.5rem 4rem;
 width: 100%;
 border-radius: 1px;
 cursor: pointer;
 font-size: 1.2rem;
 color: #fff;
 text-transform: uppercase;
 svg{
     margin-right: 0.9rem;
 }
 &:hover{
    background: #141938;
    color: #eceef8;
    svg{
        fill: #eceef8;
    }
 }
`


const Logout = styled.div`
 
`


export const Sidebar = () => {
    const router = useRouter();
    const logout = async () => {
        try {
            await signOut(auth);
            router.push('/login')
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <Container>
            <List>
                <Link><HomeIcon size="1.6rem" /> Home</Link>
                <Link><UploadIcon size="1.6rem" /> Uploads</Link>
                {/* <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link>
                <Link><SettingIcon size="1.6rem" /> Home</Link> */}
                <Link><SettingIcon size="1.6rem" /> Settings</Link>
            </List>
            <Logout onClick={logout}>
                <Link><PowerIcon size="1.6rem" /> Logout</Link>
            </Logout>
        </Container>
    )
}

