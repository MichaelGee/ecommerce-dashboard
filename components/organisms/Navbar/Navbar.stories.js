import React from 'react';
import {Navbar} from './index';

const NavStory = {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Nav = Template.bind({});

export default NavStory;
