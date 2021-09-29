import { TextInput, TextInputAppearance } from 'evergreen-ui';
import React from 'react';


interface IInput {
    placeholder: string,
    value: string | number,
    type: string,
    appearance: TextInputAppearance,
    required: boolean,
    autoComplete: string,
}

export const Input = ({ placeholder, value, type, appearance, required, autoComplete }: IInput) => {
    return (
        <React.Fragment>
            <TextInput name="text-input-name" value={value} placeholder={placeholder} type={type} appearance={appearance} autoComplete={autoComplete} required={required} />
        </React.Fragment>
    )
}
