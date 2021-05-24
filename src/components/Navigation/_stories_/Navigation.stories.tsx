import React from 'react'
import Navigation, { NavigationProps} from '../Navigation'
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Components/Navigation',
    component: Navigation,
    argTypes: {
      backgroundColor: { control: 'color' },
      accentColor: { control: 'color' },
      white: { control: 'color' },
      black: { control: 'color' },
    },
  } as Meta;
  
  const Template:Story<NavigationProps> = (args) => <Navigation {...args} />

  const handleClick = (route: string) => alert(route)
   
  export const Primary = Template.bind({});
  Primary.args = {
    backgroundColor: 'white',
    accentColor: 'blue',
    paddingSide: 10,
    align: 'middle',
    activeLink: 'about',
    links: [
      { name: 'about', route: 'about', onClick: handleClick},
      { name: 'projects', route: 'projects', onClick: handleClick},
      { name: 'contact', route: 'contact', onClick: handleClick},
    ],
    logo: 'https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png',
    menu: 'https://static.thenounproject.com/png/659803-200.png',
    visible: true,
    white: 'white',
    black: 'black',
  }