import React from "react";
import { Input } from "./Input";
import { storiesOf } from "@storybook/react";
import {text} from '@storybook/addon-knobs'

export default {
    title: 'Components/Input',
    component: Input,
}


const Template =(args)=> <Input {...args} />;


export const InputForm = Template.bind({});
InputForm.args = {
    appearance: 'default',
    required: true,
    type: "Password",
    placeholder: "Email"
}


// const stories = storiesOf('Inputs', module.exports);

// stories.add('Input', ()=> <Input placeholder={text("Placeholder", "Password")} appearance="default" required={true} type="password"/>)


