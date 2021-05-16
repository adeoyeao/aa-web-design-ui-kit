import React from 'react'
import Button, { ButtonProps} from '../Button'
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template:Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'default',
    label: 'Primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'default',
    label: 'Secondary',
}

export const Small = Template.bind({});
Small.args = {
    primary: true,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'small',
    label: 'Small',
}

export const Large = Template.bind({});
Large.args = {
    primary: true,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'large',
    label: 'Large',
}