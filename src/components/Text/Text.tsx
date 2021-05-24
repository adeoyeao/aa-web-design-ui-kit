import styled from 'styled-components'

type TextOptionsType = 'heading' | 'headingSection' | 'headingSubTitle' | 'paragraph'

export type TextProps = {
    option: string,
    content: string,
    align: 'left' | 'center',
    fontSize: number
}

const Text = (args: TextProps) => {
    const HeadingMain = styled.h1<TextProps>`
        font-size: ${(props) => `${2 * props.fontSize}rem`};
        text-align: ${(props) => props.align};
        line-height: 1.5;

        @media screen and (min-width: 700px) {
            font-size: ${(props) => `${3 * props.fontSize}rem`};
        }

        @media screen and (min-width: 1200px) {
            font-size: ${(props) => `${4.5 * props.fontSize}rem`};
        }
    `

    const HeadingSection = styled.h2<TextProps>`
        font-size: ${(props) => `${1.5 * props.fontSize}rem`};
        text-align: ${(props) => props.align};
        line-height: 1.5;

        @media screen and (min-width: 700px) {
            font-size: ${(props) => `${2 * props.fontSize}rem`};
        }    
    `

    const HeadingSubTitle = styled.h3<TextProps>`
        font-size: ${(props) => `${1.2 * props.fontSize}rem`};
        text-align: ${(props) => props.align};
        line-height: 1.5;
    `

    const Paragraph = styled.p<TextProps>`
        font-size: ${(props) => `${0.8 * props.fontSize}rem`};
        text-align: ${(props) => props.align};
        line-height: 1.5;

        @media screen and (min-width: 700px) {
            font-size: ${(props) => `${props.fontSize}rem`};
        }
    `

    const TextOptions = {
        heading: <HeadingMain {...args}>{args.content}</HeadingMain>,
        headingSection: <HeadingSection {...args}>{args.content}</HeadingSection>,
        headingSubTitle: <HeadingSubTitle {...args}>{args.content}</HeadingSubTitle>,
        paragraph: <Paragraph {...args}>{args.content}</Paragraph>,
    }

    return (
        TextOptions[args.option as TextOptionsType]
    )
}

export default Text 