import React from 'react'
import { Button } from 'evergreen-ui'

const PrimaryButton = (props) => {
    const { text } = props;
    return (
        <Button marginRight={16} appearance="primary" {...props}>
            {text}
        </Button>
    )
}

const SecondaryButton = (props) => {
    const { text } = props;
    return (
        <Button marginRight={16} appearance="secondary" {...props}>
            {text}
        </Button>
    )
}

export {PrimaryButton, SecondaryButton}