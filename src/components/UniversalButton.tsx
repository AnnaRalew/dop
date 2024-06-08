import {ButtonHTMLAttributes} from "react";


type props = ButtonHTMLAttributes<HTMLButtonElement>;

export const UniversalButton = ({onClick, name}: props) => {
    return (
        <button onClick={onClick}>{name}</button>
    )
}