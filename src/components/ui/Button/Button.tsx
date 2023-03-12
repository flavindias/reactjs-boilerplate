import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    font-weight: '600';
    font-size: 14px;
    text-decoration: none;
    height: 32px;
    border: none;
    border-radius: 6px;
    white-space: nowrap;
    padding: 1rem 1.6rem;
    cursor: pointer;
    &.primary {
        background-color: #006EC7;
        color: #fff;
        &.outline {
            background-color: transparent;
            color: #006EC7;
            border: 1px solid #006EC7;
        }
    }

    &.secondary {
        background-color: #fff;
        color: #002E54;
        &.outline {
            background-color: transparent;
            border: 1px solid #fff;
        }
    }
    &.warning {
        background-color: #FFC84D;
        color: #002E54;
        &.outline {
            background-color: transparent;
            border: 1px solid #FFC84D;
        }
    }
    
    &.small {
        height: 32px;
    }
    &.medium {
        height: 40px;
    }
    &.disabled {
        opacity: 0.65;
        pointer-events: none;
        cursor: not-allowed;
    }

`;

export interface ButtonProps {
    label: string;
    mode?: 'primary' | 'secondary' | 'warning';
    outline?: boolean;
    size?: 'small' | 'medium';
    disabled?: boolean;
    onClick: () => void;
}

export const Button = ({label, mode, size, disabled, outline, onClick}: ButtonProps) => {
    const isDisabled = disabled ? 'disabled' : '';
    const isOutline = outline ? 'outline' : '';
    return (
        <Btn className={[ mode, size, isDisabled, isOutline].join(' ')} onClick={onClick}>
            {label.toUpperCase()}
        </Btn>
    );
};