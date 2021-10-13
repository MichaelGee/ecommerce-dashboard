import React from 'react'
import { Button } from 'evergreen-ui'
import { MouseEvent } from 'react';

interface IButtonTemplate {
    appearance: any;
    text: string;
    size: "small" | "medium" | "large"
    full: boolean;
    loading: boolean;
    onClick: any;
    type: "button" | "reset" | "submit";
    marginLeft: number;
    marginRight: number;
}

export const ButtonTemplate = ({ text, appearance, size, full, loading, onClick, type, marginRight, marginLeft, ...props }: IButtonTemplate) => {
    return (
        <Button marginLeft={marginLeft} marginRight={marginRight} appearance={appearance} isLoading={loading} type={type} onClick={onClick} style={{ width: full ? "100%" : "inherit" }} size={size} {...props}>
            {text}
        </Button>
    )
}


