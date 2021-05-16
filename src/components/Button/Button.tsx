import React from 'react'
import styled from 'styled-components'

type ButtonSize = 'small' | 'default' | 'large'

export type ButtonProps = {
    primary: boolean;
    backgroundColor: string;
    accentColor: string;
    white?: string;
    black?: string;
    size: ButtonSize;
    label: string;
}

const Button = (args: ButtonProps) => {
    const StyledButton = styled.button<ButtonProps>`
        appearance: none;
        outline: none;
        cursor: pointer;
        margin: 0;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        border: ${(props) => props.primary ? 'none' : `1px solid ${props.black}`};
        background: ${(props) => props.primary ? props.backgroundColor : 'transparent'};
        color: ${(props) => props.primary ? props.white : props.black};
        width: ${(props) => {
            const buttonWidths = {
                small: '7.5rem',
                default: '10rem',
                large: '12.5rem'
            }
            return buttonWidths[props.size] || buttonWidths.default
        }};
        &:hover {
            border: none;
            background: ${(props) => props.primary ? props.accentColor : props.backgroundColor};
            color: ${(props) => props.white};
        }
    `

    return(
        <StyledButton {...args}>{args.label}</StyledButton>
    )
}

export default Button