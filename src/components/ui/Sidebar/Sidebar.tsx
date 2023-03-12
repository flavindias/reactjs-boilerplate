import React from 'react';
import styled from 'styled-components';
import { Nav, NavProps } from '../Nav';
import { Logo, LogoProps } from '../Logo';

const Container = styled.div`
    width: 14rem;
    height: 100vh;
    background-color: #E9F2FA;
    box-shadow: 3px 0px 6px #006EC729;
    display: flex;
    flex-direction: column;
    > * {
        padding-left: 0;
        padding-right: 0;
    }
    
    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e3e3e3;
    }
    > div form {
        position: relative;
    }
    > div form input[type="search"] {
        width: 100%;
        padding-left: 2rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 0.625rem 0.75rem;
        background-size: 1rem;
        position: relative;
    }
    > div form input[type="search"].loading {
        background-image: none;
    }
    
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        margin: 0.25rem 0;
    }
`;


interface SidebarProps {
    menu: NavProps;
    logo: LogoProps;
}
export const Sidebar: React.FC<SidebarProps> = ({menu, logo}) => {
    return (
        <Container>
            <Logo {...logo} />
            <Nav {...menu} />
        </Container>
    );
};