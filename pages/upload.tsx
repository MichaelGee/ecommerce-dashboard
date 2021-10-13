import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate';
import React, { useContext, useEffect } from 'react';
import { ModalContext } from 'context/ModalContext';
import UploadModal from 'components/organisms/Modal/UploadModal'




const Upload = () => {
    const { modal, toggleModal } = useContext(ModalContext);

    return (
        <div>
            <ButtonTemplate onClick={toggleModal} appearance="primary" text="Upload" size="small" />
            <UploadModal isOpen={modal} onClose={toggleModal} />
        </div>
    )
}

export default Upload;
