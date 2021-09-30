import React from 'react'
import { Button } from 'evergreen-ui'
import { MouseEvent } from 'react';

interface IButtonTemplate {
    appearance: any;
    text: string;
    size: "small" | "medium" | "large"
    full: boolean;
    loading: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonTemplate = ({ text, appearance, size, full, loading, onClick, ...props }: IButtonTemplate) => {
    return (
        <Button marginRight={16} appearance={appearance} isLoading={loading} onClick={onClick} style={{ width: full ? "100%" : "inherit" }} size={size} {...props}>
            {text}
        </Button>
    )
}


