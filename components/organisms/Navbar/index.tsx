import React from 'react'
import styled from '@emotion/styled';
import { UserAvatar } from 'components/atoms/Avatar';
import { AuthContext } from 'context/AuthContext';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
`
const Name = styled.h1`
  
`

export const Navbar = () => {
    const [user] = React.useContext(AuthContext);
    return (
        <Container>
            <Name></Name>
            <UserAvatar name={user?.email || user?.displayName} size={35} src={user?.photoURL} color="blue" />
        </Container>
    )
}


