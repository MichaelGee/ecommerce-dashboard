import React from 'react'
import { Button } from 'evergreen-ui'

interface IButtonTemplate {
    appearance: any;
    text: string;
    size: "small" | "medium" | "large"
    full: boolean;
    loading: boolean;
}

export const ButtonTemplate = ({ text, appearance, size, full, loading, ...props }: IButtonTemplate) => {
    return (
        <Button marginRight={16} appearance={appearance} isLoading={loading} style={{ width: full ? "100%" : "inherit" }} size={size} {...props}>
            {text}
        </Button>
    )
}


