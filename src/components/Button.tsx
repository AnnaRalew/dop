import {ButtonHTMLAttributes} from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    name?: string
    onClick: () => void
    color?: string
    disabled?: boolean
    children ?: React.ReactNode
}
& ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({name, className, onClick, children, disabled, color, ...rest } : ButtonPropsType) => {

    // const finalClassName = s.button + (
    //     disabled ? " " + "disabled" :
    //         color === "red" ?
    //             " " + "red" :
    //             color === "secondary" ?
    //                 " " + "secondary" :
    //                 " " + "default"
    // )
    //
    const finalClassName = `${s.button} 
        ${disabled? s.disabled:""}
        ${color==="red" ? s.red : color==="blue"? s.blue :s.secondary} 
   
    `


    return (
    <>
        <button onClick={onClick} className={finalClassName}>{children}</button>

    </>
    )
}