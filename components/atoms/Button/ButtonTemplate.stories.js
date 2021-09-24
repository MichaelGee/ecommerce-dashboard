import React from 'react';
import  {PrimaryButton, SecondaryButton}  from './ButtonTemplate';
import { storiesOf } from '@storybook/react';
import {  select, text } from '@storybook/addon-knobs';




const stories = storiesOf('PrimaryButton', module);
const sizeOptions = ['small', 'medium', 'large'];

stories.add('Primarybutton', () => <PrimaryButton size={select('Size', sizeOptions, 'normal')} text={text('Text', 'Go to dashboard')} />);
stories.add('SecondaryButton', () => <SecondaryButton size={select('Size', sizeOptions, 'normal')} text={text('Text', 'Go to dashboard')} />);