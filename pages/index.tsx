import React from 'react'
import { ModalComponent } from 'components/organisms/Modal'
import { Sidebar } from 'components/organisms/Sidebar/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ModalContext } from 'context/ModalContext';
import { useContext } from 'react';
import UploadModal from 'components/organisms/Modal/UploadModal'
import { UserAvatar } from 'components/atoms/Avatar'
import { AuthContext } from 'context/AuthContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from './api/auth/firebase';

export default function Home() {
  // const { modal, toggleModal } = useContext(ModalContext);
   const [user] = React.useContext(AuthContext);

   React.useEffect(() => {
        //Create a user db on firestore with the users unique ID
        (async () => {
            await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    uid: user.uid
                 });   
        })()
    }, [user])
  return (
    <div>
      {/* <Sidebar /> */}
      {/* <UserAvatar name={user?.email || user?.displayName} size={40} src={user?.photoURL} /> */}
      {/* <button onClick={toggleModal}>Click my ass</button>
      <UploadModal isOpen={modal} onClose={toggleModal} /> */}
    </div>
  )
}
