import React from 'react';
import {TextareaComponent} from './Textarea';

const TextareaStory = {
  title: 'Components/Textarea',
  component: TextareaComponent,
};

const Template = (args) => (
  <TextareaComponent {...args} />
);

export const TextareaForm = Template.bind({});
TextareaForm.args = {
  appearance: 'default',
  placeholder: 'Add a description',
  spellCheck: true,
  grammarly: true,
  width: '100%',
};

export default TextareaStory;
