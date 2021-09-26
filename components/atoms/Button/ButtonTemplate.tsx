import React from 'react'
import { Button } from 'evergreen-ui'

interface IButtonTemplate{
  appearance: any;
  text: string;
}

export const ButtonTemplate = ({ text, appearance, ...props }:IButtonTemplate) => {
    return (
        <Button marginRight={16} appearance={appearance} {...props}>
            {text}
        </Button>
    )
}


