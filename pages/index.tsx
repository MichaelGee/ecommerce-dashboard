import { ModalComponent } from 'components/organisms/Modal'
import { Sidebar } from 'components/organisms/Sidebar/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ModalContext } from 'context/ModalContext';
import { useContext } from 'react';
import UploadModal from 'components/organisms/Modal/UploadModal'

export default function Home() {
  // const { modal, toggleModal } = useContext(ModalContext);
  return (
    <div>
      <Sidebar />
      {/* <button onClick={toggleModal}>Click my ass</button>
      <UploadModal isOpen={modal} onClose={toggleModal} /> */}
    </div>
  )
}
