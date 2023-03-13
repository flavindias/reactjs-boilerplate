import React from "react";
import { SafeUser } from "../../../@types/user";
export interface HeaderProps {
    user: SafeUser
};

export const Header = ({user}: HeaderProps) => {
    return (
        <header>
            <div className="wrapper">
            </div>
        </header>
    );
};