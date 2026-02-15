import React, { useCallback, useState } from "react";

// @ts-expect-error no typedef
import hearts from './../../../assets/heart-color.svg?raw'

import males from './../../../assets/misc/males.json'
import females from './../../../assets/misc/females.json'
import { Block } from "../../common/block";

type ICard = {
    name: string,
    attrs: string[],
    type: "male" | "female",
    className?: string,
    onAnimationEnd: () => void
}

function Card({ className = "",  type, attrs, name, onAnimationEnd }: ICard) {
    const color = type == "female" ? "primary" : "secondary"
    return (
        <Block className={`grow flex flex-col justify-between px-7 min-w-[400px] max-w-[400px] max-h-[350px] gap-4 text-center ${className}`} onAnimationEnd={onAnimationEnd}>
            <ul className="grow flex flex-col justify-evenly gap-3 text-xl text-gray-800">
                {
                    attrs.map((attr) => <li>{attr}</li>)
                }
            </ul>
            <h2 className={`font-semibold text-3xl text-${color}`}>
                {name}
            </h2>
        </Block>
    )
}

type ICards = {
    type: "male" | "female"
}

const style = { 
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
    width: "80px",
    height: "80px"
}

export function Cards({ type }: ICards) {
    const cards = type == "female" ? females : males
    const foreground = type == "female" ? "var(--color-primary)" : "var(--color-secondary)"

    const [index, setIndex] = useState(0)
    const [cardAnimation, setCardAnimation] = useState('')

    const onAnimationEnd = useCallback(() => {
        console.log(cardAnimation)
        if(cardAnimation == "animate-face-edge") {
            setIndex((index+1) % cards.length)
            setCardAnimation('animate-edge-face')
        }
    }, [index, cardAnimation])

    const onNext = useCallback(() =>{
        setCardAnimation('animate-face-edge')
    }, [])

    const onNope = useCallback(() => {
        onNext()
    }, [onNext])

    const onYup = useCallback(() => {
        onNext()
    }, [onNext])

    const onBof = useCallback(() => {
        onNext()
    }, [onNext])

    return (
        <div className="p-4 flex grow flex-col justify-center items-center gap-5 relative" style={{'--foreground': 'white', '--background': foreground} as React.CSSProperties}>
            <div className='absolute opacity-70 z-[-1] top-0 left-0 w-full h-full overflow-hidden' dangerouslySetInnerHTML={{__html: hearts}}>
            </div>
            <Card className={`${cardAnimation} ${cardAnimation == '' ? 'opacity-100' : 'opacity-0'}`} {...cards[index]} type={type} onAnimationEnd={onAnimationEnd} />
            <nav className="flex justify-center gap-4 items-center w-full">
                <button className="bg-white rounded-full text-4xl flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95" style={style} onClick={onNope}>
                    ❌
                </button>
                <button className="bg-white rounded-full text-4xl  flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95" style={style} onClick={onBof}>
                    {
                        type == "female" ? "🤷‍♂️" : "🤷‍♀️"
                    }
                </button>
                <button className="bg-white rounded-full text-4xl  flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95" style={style} onClick={onYup}>
                    ✔️
                </button>
            </nav>
        </div>
    )
} 