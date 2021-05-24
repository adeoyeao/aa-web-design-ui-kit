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
    backgroundColor: 'pink',
    accentColor: 'blue',
    paddingSide: 10,
    align: 'middle',
    activeLink: 'about',
    links: [
      { name: 'about', route: 'about', onClick: handleClick},
      { name: 'projects', route: 'projects', onClick: handleClick},
      { name: 'contact', route: 'contact', onClick: handleClick},
    ],
    logo: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
    menu: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
    visible: true,
    white: 'white',
    black: 'black',
  }