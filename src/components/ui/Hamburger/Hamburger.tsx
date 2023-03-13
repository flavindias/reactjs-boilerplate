import React, { useState } from "react";
import styled from "styled-components";

const StyledHamburger = styled.div`
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    transform: rotate(0deg);
    transition: .5s;
    
    span {
        display: block;
        position: absolute;
        height: 9px;
        width: 100%;
        background: #ccc;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        :nth-child(1) {
            top: 0px;
        }
        :nth-child(2), :nth-child(3) {
            top: 18px;
        }
        :nth-child(4) {
            top: 36px;
        }
    }

    &.open {
        span{
            :nth-child(1) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
            :nth-child(2) {
                transform: rotate(45deg);
            }
            :nth-child(3) {
                transform: rotate(-45deg);
            }
            :nth-child(4) {
                top: 18px;
                width: 0%;
                left: 50%;
            }
        }
    }
`;

export interface HamburgerProps {
    open: boolean;
    onClick: () => void;
}
export const Hamburger = ({ onClick }: HamburgerProps) => {
    const [open, setOpen] = useState(false);
    return (
        <StyledHamburger
            className={open ? "open" : ""}
            onClick={() => {setOpen(!open); onClick();}}
        >
            <span />
            <span />
            <span />
            <span />
        </StyledHamburger>
    );
};