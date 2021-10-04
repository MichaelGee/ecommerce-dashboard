import { TextInput, TextInputAppearance } from 'evergreen-ui';
import { Fragment, ChangeEvent } from 'react';

type IInput = {
    placeholder: string,
    value: string,
    type: string,
    appearance: TextInputAppearance,
    required: boolean,
    autoComplete: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    isInvalid: boolean,
    name: string,
}

export const Input = ({ placeholder, value, type, appearance, required, autoComplete, handleChange, isInvalid, name }: IInput) => {
    return (
        <Fragment>
            <TextInput name={name} value={value} placeholder={placeholder} isInvalid={isInvalid} onChange={handleChange} type={type} appearance={appearance} autoComplete={autoComplete} required={required} />
        </Fragment>
    )
}


// import { TextInput, TextInputAppearance } from 'evergreen-ui';
// import { Fragment, ChangeEvent } from 'react';
// import { useForm, useController, UseControllerProps } from "react-hook-form";

// type IInput = {
//     placeholder: string,
//     value: string,
//     type: string,
//     appearance: TextInputAppearance,
//     required: boolean,
//     autoComplete: string,
//     handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
//     isInvalid: boolean,
//     name: string,
// }

// export const Input = (props: UseControllerProps<IInput>) => {
//     const { field, fieldState } = useController(props);
//     return (
//         <Fragment>
//             <TextInput name={props.name} value={props.value} placeholder={props.placeholder} isInvalid={props.isInvalid} onChange={props.handleChange} type={props.type} appearance={props.appearance} autoComplete={props.autoComplete} required={props.required} />
//         </Fragment>
//     )
// }
