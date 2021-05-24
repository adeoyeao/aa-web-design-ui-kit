import Text, { TextProps } from "../Text";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
      option: { control: {
          type: 'radio',
          options: ['heading', 'headingSection', 'headingSubTitle', 'paragraph']
      }},
      align: { control: {
          type: 'radio',
          options: ['left', 'center']
      }},
      fontSize: { control: {
          type: 'number'
      }}
  },
} as Meta;

const Template:Story<TextProps> = (args) => <Text {...args} />

export const Heading = Template.bind({})
Heading.args = {
    option: 'heading',
    content: 'Heading',
    fontSize: 1,
}

export const HeadingSection = Template.bind({})
HeadingSection.args = {
    option: 'headingSection',
    content: 'Section Heading',
    fontSize: 1,
}

export const HeadingSubTitle= Template.bind({})
HeadingSubTitle.args = {
    option: 'headingSubTitle',
    content: 'Sub Title Heading',
    fontSize: 1,
}

export const Paragraph= Template.bind({})
Paragraph.args = {
    option: 'paragraph',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fontSize: 1,
}