import React from "react";
import { NavLink, NavLinkProps }  from "../NavLink";
import styled from "styled-components";

const NavContainer = styled.nav`
    flex: 1;
    overflow: auto;
    padding-top: 1rem;
`;

export interface NavProps {
    items: NavLinkProps[];
}
  
export const Nav: React.FC<NavProps> = ({items}: NavProps) => {
    return (
        <NavContainer>
            {
                items.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            active={index === 0}
                            title={item.title}
                            icon={item.icon}
                            onClick={item.onClick}
                        />
                    );
                })
            }
        </NavContainer>
    );
};   