import {ButtonHTMLAttributes} from "react";


type props = ButtonHTMLAttributes<HTMLButtonElement>;

export const UniversalButton = ({onClick, name, className}: props) => {
    return (
        <button className={className} onClick={onClick}>{name}</button>
    )
}