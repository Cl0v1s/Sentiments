import React from 'react'

// @ts-expect-error no typedef
import hearts from './../../../assets/heart-bicolor.svg'
import { Block } from '../../common/block'
import { Button } from '../../common/button'

export function Activity({}) {
    return (
        <div className='p-3 flex flex-col justify-evenly gap-6 grow items-center justify-center bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${hearts}")`}} >
            <div className='text-center'>
                <Block className='mb-3'>
                    <h2 className='text-primary font-semibold text-3xl mb-3'>Trouver mon profil en premier</h2>
                    <p>
                        Je préfère découvrir <span className='font-semibold'>l’archétype qui me ressemble</span> avant de chercher ma personne idéale.
                    </p>
                </Block>
                <Button className='bg-primary'>
                    Voir les femmes
                </Button>
            </div>
            <div className='text-center'>
                <Block className='mb-3'>
                    <h2 className='text-secondary font-semibold text-3xl mb-3'>Trouver mon homme idéal en premier</h2>
                    <p>
                        Je sais ce que je veux: <span className='font-semibold'>je choisis directement les 2 archétypes</span>.
                    </p>
                </Block>
                <Button className='bg-secondary'>
                    Voir les hommes
                </Button>
            </div>
        
        </div>
    )
}