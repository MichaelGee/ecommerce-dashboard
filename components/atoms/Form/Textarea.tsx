import React from 'react'
import { Textarea } from 'evergreen-ui';

type ITextarea = {
    placeholder: string,
    appearance: string,
    spellCheck: boolean,
    grammarly: boolean,
    width: string,
}

export const TextareaComponent = ({ placeholder, appearance, spellCheck, grammarly, width }: ITextarea) => {
    return (
        <div>
            <Textarea placeholder={placeholder} appearance={appearance} spellCheck={spellCheck} grammarly={grammarly} width={width} />
        </div>
    )
}
