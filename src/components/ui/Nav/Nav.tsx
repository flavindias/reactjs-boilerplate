import React, { useState } from "react";
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
    const [renderItems, setRenderItems] = useState(items);
    const setActive = (index: number) => {
        const newItems = items.map(item => {items.indexOf(item) === index ? item.active = true : item.active = false;  return item});
        setRenderItems(newItems);
    }

    return (
        <NavContainer>
            {
                renderItems.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            active={item.active}
                            title={item.title}
                            icon={item.icon}
                            onClick={() => {setActive(index); item.onClick;}}
                        />
                    );
                })
            }
        </NavContainer>
    );
};   