import styled from 'styled-components'

type ButtonSize = 'default' | 'small' | 'large'
type Corners = 'default' | 'round' | 'pill'

export type ButtonProps = {
    primary: boolean;
    backgroundColor: string;
    accentColor: string;
    white: string;
    black: string;
    size: ButtonSize;
    label: string;
    cornerType: Corners;
    onClick: () => void;
}

const Button = (args: ButtonProps) => {
    const StyledButton = styled.button<ButtonProps>`
        appearance: none;
        outline: none;
        cursor: pointer;
        margin: 0;
        padding: 1rem 2rem;
        border-radius: ${(props) => {
            const cornerTypes = {
                default: '0rem',
                round: '0.5rem',
                pill: '10rem'
            }
            return cornerTypes[props.cornerType] || cornerTypes.default
        }};
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