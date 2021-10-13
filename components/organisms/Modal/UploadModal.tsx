import { ButtonTemplate } from 'components/atoms/Button/ButtonTemplate'
import React, { useState } from 'react'
import { ModalComponent } from '.'
import { Flex, Box } from 'rebass';
import { Input } from 'components/atoms/Form/Input';
import { TextareaComponent } from 'components/atoms/Form/Textarea';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

type ILoginForm = {
    isOpen: boolean;
    onClose: Function;
}

export default function UploadModal({ isOpen, onClose }: ILoginForm) {
    const [mediaFile, setMediaFile] = useState(null)
    const storage = getStorage();
    const id = uuidv4();

    const onChange = (e) => {
        if (e.target.file) {
            setMediaFile(e.target.files[0])
        }
    }
    const uploadImages = () => {
        const storageRef = ref(storage, 'images/' + id);
        uploadBytes(storageRef, mediaFile).then((snapshot) => {
            console.log(snapshot);
        });

    }
    return (
        <ModalComponent isOpen={isOpen} onClose={onClose} maxW="50rem">
            <Box display="flex" flexDirection="column" width="100%" padding='2rem 0'>
                <Flex flexDirection="column" justifyContent="space-between" width="100%">
                    <Box mb="1rem">
                        <Input placeholder="Title" type="text" appearance="default" width="100%" required />
                    </Box>
                    <Box mb="1rem">
                        <Input placeholder="Price" type="text" appearance="default" width="100%" required />
                    </Box>
                    <Box mb="1rem">
                        <TextareaComponent placeholder="Add description" width="100%" appearance="default" grammarly={true} spellCheck={true} />
                    </Box>
                    <Box mb="1rem">
                        <input type="file" accept="image/*" style={{ fontSize: '12px' }} onChange={onChange} />
                    </Box>
                </Flex>
                <Flex justifyContent="space-between" display="flex" alignItem="center" width="100%">
                    <ButtonTemplate marginRight={10} appearance="primary" text="Upload" onClick={uploadImages} />
                    <ButtonTemplate appearance="minimal" text="Cancel" />
                </Flex>
            </Box>
        </ModalComponent>
    )
}
