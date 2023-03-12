import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div<{isLoading: boolean}>`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #e9f2fa;
`;
const LoaderIconContainer = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
const StyledLoaderIcon = styled.svg`
    animation: rotate 2s linear infinite;
    width: 60px;
    height: 60px;
    transform: rotate(180deg);
`;  

const LoaderIcon = () => {
    return (
        <LoaderIconContainer>

        <StyledLoaderIcon>
            <g id="Group_1946" data-name="Group 1946" transform="translate(-1.224 -1.307)">
                <path id="Path_5640" data-name="Path 5640" d="M24,3.021V14.46" transform="translate(6.884)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5641" data-name="Path 5641" d="M6.857,11.592l8.434,7.729" transform="translate(1.147 2.868)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5642" data-name="Path 5642" d="M3.429,31.486,14.516,27.35" transform="translate(0 8.142)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5643" data-name="Path 5643" d="M15.041,47.547l5.093-10.241" transform="translate(3.886 11.474)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5644" data-name="Path 5644" d="M43.258,11.592l-8.434,7.729" transform="translate(10.507 2.868)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5645" data-name="Path 5645" d="M47.351,31.486,36.264,27.35" transform="translate(10.989 8.142)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
                <path id="Path_5646" data-name="Path 5646" d="M34.236,47.547,29.143,37.306" transform="translate(8.606 11.474)" fill="none" stroke="#002e54" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.429"/>
               
            </g>
        </StyledLoaderIcon>
        </LoaderIconContainer>
    );
};
export interface LoaderProps {
    isLoading: boolean;
}
export const Loader: React.FC<LoaderProps> = ({isLoading}) => {
    return (
        <LoaderContainer isLoading={isLoading}>
            <LoaderIcon />
        </LoaderContainer>
    );
};