import React from "react";
import styled from "styled-components";

const NavLinkItem = styled.a<{active: boolean}>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    
    white-space: pre;
    
    color: inherit;
    text-decoration: none;
    height: 56px;
    margin-top: 5px;

    background-color: ${props => props.active ? "white" : "transparent"};
    
    :hover {
        background-color: white;
    }
    
    :before {
        display: ${props => props.active ? "" : "none"};
        content: "";
        left: 0px;
        width: 5px;
        height: 56px;
        transform: matrix(-1, 0, 0, -1, 0, 0);
        /* UI Properties */
        background: #002E54 0% 0% no-repeat padding-box;
        border-radius: 6px 0px 0px 6px;
    }
`;
const Title = styled.span<{active: boolean}>`
    float: left;
    color: #002E54;
    font-weight: ${props => props.active ? "bold" : "300"};
    font-size: 14px;
`;
const Icon = styled.i<{active: boolean}>`
    color: inherit;
    margin-left: ${props => props.active ? "10px" : "15px"};
    margin-right: 15px;
    width: 36px;
    height: 36px;
    background-color: gray;
`;
export interface NavLinkProps {
    active: boolean;
    title: string;
    icon: string;
    onClick: () => void;
  }
  
export const NavLink: React.FC<NavLinkProps> = ({active, title, icon, onClick}: NavLinkProps) => {
    return (
        <NavLinkItem active={active} onClick={onClick}>
            <Icon active={active} className={icon} />
            <Title active={active}>{title}</Title>
        </NavLinkItem>
    );
};   