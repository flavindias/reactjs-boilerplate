import React from 'react';
import styled from 'styled-components';

const LogoVertical = styled.img`
    width: 105px;
    height: 131px;
    align-self: center;
    margin-top: 40px;
`;

export interface LogoProps {
    src: string;
    alt: string;
}

export const Logo = ({src, alt}: LogoProps) => {
    return (
        <LogoVertical src={src} alt={alt} />
    );
};