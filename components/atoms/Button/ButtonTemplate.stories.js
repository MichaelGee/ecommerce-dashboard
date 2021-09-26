import React from 'react';
import  {ButtonTemplate}  from './ButtonTemplate';
import {  select } from '@storybook/addon-knobs';


export default {
    title: 'Components/Button',
    component: ButtonTemplate,
  };

const sizeOptions = ['small', 'medium', 'large'];

const Template = (args) => <ButtonTemplate {...args} size={select('Size', sizeOptions, 'normal')}/>

export const Primary = Template.bind({});
Primary.args = {
    appearance: 'primary',
    text: 'Login to dashboard'
}

export const Secondary = Template.bind({});
Secondary.args = {
    appearance: 'secondary',
    text: 'Login to dashboard'
}
