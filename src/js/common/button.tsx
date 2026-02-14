import React, { ReactNode } from 'react'

type IButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
}

export function Button({ children, className = '', ...props }: IButton)  {
    return (
        <button {...props} className={`px-3 py-2 rounded-[49px] text-xl text-white ${className}`} style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"}}>
            { children }
        </button>
    )
}