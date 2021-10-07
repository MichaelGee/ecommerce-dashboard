import React from 'react';
import {ModalComponent} from './index';
import {Pane} from 'evergreen-ui';
const ModalStory = {
  title: 'Components/Modal',
  component: ModalComponent,
};

const Template = (args) => (
  <ModalComponent {...args} />
);

export const Dialog = Template.bind({});

export default ModalStory;
