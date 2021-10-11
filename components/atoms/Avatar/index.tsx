import React from 'react'
import { Avatar } from 'evergreen-ui'


type IAvatar = {
    name: string;
    size: number;
    src: string;
    color: string;
}

export const UserAvatar = ({ name, size, src, color }: IAvatar) => {

    return (
        <React.Fragment>
            <Avatar name={name} size={size} src={src} color={color} />
        </React.Fragment>
    )
}
