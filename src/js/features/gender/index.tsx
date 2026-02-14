import React, { ReactNode } from 'react'

import { Button } from './../../common/button'

// @ts-expect-error no typedef
import hearts from './../../../assets/heart.svg'
// @ts-expect-error no typedef
import woman from './../../../assets/figures/1.svg'
// @ts-expect-error no typedef
import man from './../../../assets/figures/2.svg'

export function Gender({}) {
    return (
        <div className='flex flex-col grow items-center justify-center bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${hearts}")`}} >
            <div className='w-full grow flex flex-col items-center justify-center relative isolate'>
                <div className='z-[-1] opacity-80 bg-center bg-no-repeat bg-contain absolute top-0 left-0 w-full h-full' style={{backgroundImage: `url("${woman}")`}}></div>
                <Button className='bg-primary'>
                    Femme
                </Button>
            </div>
            <div className='text-semibold text-3xl text-center text-gray-800 px-10'>
                Comment tu te ressens ?
            </div>
            <div className='w-full grow flex flex-col items-center justify-center relative isolate'>
                <div className='z-[-1] opacity-80 bg-center bg-no-repeat bg-contain absolute top-0 left-0 w-full h-full' style={{backgroundImage: `url("${man}")`}}></div>
                <Button className='bg-secondary'>
                    Homme
                </Button>
            </div>
        </div>
    )
}