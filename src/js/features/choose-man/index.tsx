import React from 'react'
import { Button } from '../../common/button'
import { Block } from '../../common/block'

// @ts-expect-error no typedef
import hearts from './../../../assets/heart-secondary.svg'

export function ChooseMan({}) {
    return (
        <div className='grow flex flex-col p-4 justify-center'>
            <div className='absolute opacity-70 z-[-1] top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${hearts}")`}} ></div>
            <Block className='text-center mb-4'>
                <h2 className='text-secondary text-3xl font-semibold mb-3'>
                    Choisis les 2 archétypes masculins
                </h2>
                <p>
                    qui représentent <span className='font-semibold'>ton homme idéal</span><br /><br />
                    <span className='font-semibold'>
                        Ce n’est pas parce qu’un critère te manque qu’il n’existe pas. 
                    </span><br /><br />
                    Comme tout archétype, ces profils ne décrivent que les traits principaux. Ils donnent le ton, l’énergie. Les nuances viendrontplus tard.<br /><br />
                    Choisis donc 2 profils qui t’attirent le plus, ceux qui te parlent instinctivement, et laisse le jeu t’accompagner dans la suite.
                </p>
            </Block>
            <Button className="bg-secondary">
                Voir les hommes
            </Button>
        </div>
    );
}