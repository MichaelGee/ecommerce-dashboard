import {TextInput, TextInputAppearance} from 'evergreen-ui';
import React from 'react';


interface IInput {
    placeholder: string;
    value: string | number;
    type: string;
    appearance: TextInputAppearance;
    required: boolean;
}

export const Input = ({placeholder, value, type, appearance, required}: IInput) => {
    return (
        <React.Fragment>
            <TextInput name="text-input-name" value={value} placeholder={placeholder} type={type} appearance={appearance} required={required} />
        </React.Fragment>
    )
}
