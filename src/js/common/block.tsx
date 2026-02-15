import React, { ReactNode } from 'react'

type IBlock = React.HTMLAttributes<HTMLDivElement> & {
    children: ReactNode,
    className?: string
}

export function Block({ children, className = '', ...props}: IBlock) {
    return (
        <div {...props} className={`rounded-[49px] px-5 py-4 bg-white ${className}`} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            { children }
        </div>
    )
}