import React, {useState} from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 6px;
    background-color: #fff;
    align-items: center;
    height: 32px;
    box-shadow: 0px 3px 6px #8B91A614;
`;

const Label = styled.label`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #4a4f5c;
    flex-grow: 0.3;
    margin-left: 16px;
    margin-right: 8px;
    text-align: left;
    min-width: 50px;
    max-width: 50px;
`;
const InputField = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    border: none;
    white-space: nowrap;
    flex-grow: 9;
    margin-left: 8px;
    margin-right: 16px;
    color: #000;
    &:focus {
        outline: none;
    }
`; 

const PasswordButton = styled.a`
    display: flex;
    width: 30px;
    height: 30px;
    /* background-color: #000; */
    flex-grow: 0.2;
    margin-right: 16px;
    margin-left: 0px;
    justify-content: flex-end;
`;
const StyledPasswordIcon = styled.svg`
    align-self: center;
    width: 24px;
    height: 24px;
`;
const PasswordIcon = () => {
    return (
        <StyledPasswordIcon xmlns="http://www.w3.org/2000/svg" width="25.769" height="22.429" viewBox="0 0 25.769 22.429">
            <g id="Group_1404" data-name="Group 1404" transform="translate(-201.446 1.25)">
                <path id="Path_5237" data-name="Path 5237" d="M220.027,4.23a25.709,25.709,0,0,1,2.418,2.3,1.783,1.783,0,0,1,0,2.459c-1.946,2.094-6.365,6.155-11.508,6.155a10.252,10.252,0,0,1-1.817-.164" transform="translate(3.395 2.21)" fill="none" stroke="#4a4f5c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_5238" data-name="Path 5238" d="M205.8,13.018a25.324,25.324,0,0,1-2.979-2.748,1.783,1.783,0,0,1,0-2.459c1.946-2.094,6.365-6.155,11.508-6.155a10.549,10.549,0,0,1,2.678.354" transform="translate(0 0.923)" fill="none" stroke="#4a4f5c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_5239" data-name="Path 5239" d="M213.616,7.177a3.689,3.689,0,0,1-2.688,2.687" transform="translate(4.299 3.683)" fill="none" stroke="#4a4f5c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_5240" data-name="Path 5240" d="M207.87,7.811a3.692,3.692,0,0,1,3.692-3.693" transform="translate(2.77 2.154)" fill="none" stroke="#4a4f5c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_5241" data-name="Path 5241" d="M223.869-.189,203.562,20.118" transform="translate(0.615 0)" fill="none" stroke="#4a4f5c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </g>
        </StyledPasswordIcon>
    );
};

export interface InputProps {
    label: string;
    type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    size?: 'small' | 'medium';
    disabled?: boolean;
    onChange: () => void;
}

export const Input = ({label, type = "text", size, onChange}: InputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <InputContainer>
        <Label>
            {label}
        </Label>
        <InputField type={(type==="password" && isPasswordVisible) ? "text": type} className={[size].join(' ')} onChange={onChange} />
        {type === "password" && <PasswordButton onClick={()=>setIsPasswordVisible(!isPasswordVisible)}><PasswordIcon /></PasswordButton>}
        </InputContainer>
        
    );
};