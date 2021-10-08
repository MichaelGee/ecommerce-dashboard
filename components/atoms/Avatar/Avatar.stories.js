import React from 'react';
import {UserAvatar} from './index';

const AvatarStory = {
  title: 'Components/Avatar',
  component: UserAvatar,
};

const Template = (args) => (
  <UserAvatar {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
  name: 'michaelgatesjr@gmail.com',
  size: 40,
  src:
    'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg',
};

export default AvatarStory;
