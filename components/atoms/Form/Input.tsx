import { TextInput, TextInputAppearance } from 'evergreen-ui';
import { Fragment, ChangeEvent } from 'react';


interface IInput {
    placeholder: string,
    value: string,
    type: string,
    appearance: TextInputAppearance,
    required: boolean,
    autoComplete: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({ placeholder, value, type, appearance, required, autoComplete, handleChange }: IInput) => {
    return (
        <Fragment>
            <TextInput name="text-input-name" value={value} placeholder={placeholder} onChange={handleChange} type={type} appearance={appearance} autoComplete={autoComplete} required={required} />
        </Fragment>
    )
}
