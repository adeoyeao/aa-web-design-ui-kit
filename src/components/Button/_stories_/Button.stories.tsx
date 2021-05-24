import React from 'react'
import Button, { ButtonProps} from '../Button'
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    white: { control: 'color' },
    black: { control: 'color' },
    accentColor: { control: 'color' },
  },
} as Meta;

const Template:Story<ButtonProps> = (args) => <Button {...args} />

export const CTA = Template.bind({});
CTA.args = {
    primary: true,
    backgroundColor: 'blue',
    accentColor: 'orange',
    white: 'white',
    black: 'black',
    size: 'default',
    label: 'Primary',
}
