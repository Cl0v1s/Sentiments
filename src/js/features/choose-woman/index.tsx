import React from 'react'
import { Button } from '../../common/button'
import { Block } from '../../common/block'

// @ts-expect-error no typedef
import hearts from './../../../assets/heart-primary.svg'

export function ChooseWoman({ }) {
    return (
        <div className='grow flex flex-col p-4 justify-center'>
            <div className='absolute opacity-70 z-[-1] top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("${hearts}")` }} ></div>
            <Block className='text-center mb-4'>
                <h2 className='text-primary text-3xl font-semibold mb-3'>
                    Choisis les 2 archétypes féminins
                </h2>
                <p>
                    <span className='font-semibold'>qui te ressemblent le plus en relation.</span><br /><br />
                    Chaque carte représente un archétype de femme. Évidemment, on peut se reconnaître un peu partout : <span className='font-semibold'>on est toutes multiples, selon les moments et les rôles</span>.<br /><br />
                    Mais pour ce jeu, on te demande de choisir <span className='font-semibold'>ceux qui disent quelque chose d’important sur la façon dont tu aimes, dont tu vis le lien à l’autre</span>.<br /><br />
                    Après ça, tu pourras explorer les archétypes masculins qui te correspondent 
                </p>
            </Block>
            <Button className="bg-primary">
                Voir les femmes
            </Button>
        </div>
    );
}