import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate'
import React from 'react'
import { ModalComponent } from '.'
import { Flex } from 'rebass';


type ILoginForm = {
    isOpen: boolean;
    onClose: Function;
}

export default function UploadModal({ isOpen, onClose }: ILoginForm) {
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} maxW="40rem">
            <Flex justifyContent="space-between" width="100%">
                <ButtonTemplate full appearance="primary" text="Upload" />
                <ButtonTemplate full appearance="secondary" text="Cancel" />
            </Flex>
        </ModalComponent>
    )
}
