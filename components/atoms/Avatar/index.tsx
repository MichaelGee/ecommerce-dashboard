import React from 'react'
import { Avatar } from 'evergreen-ui'


type IAvatar = {
    name: string;
    size: number;
    src: string;
}

export const UserAvatar = ({ name, size, src }: IAvatar) => {

    return (
        <React.Fragment>
            <Avatar name={name} size={size} src={src} />
        </React.Fragment>
    )
}
