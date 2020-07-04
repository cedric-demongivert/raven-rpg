import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

import { SunriseInfusion } from '../processed/SunriseInfusion'
import { ThiefBlessing } from '../processed/ThiefBlessing'
import { GoldenSun } from '../processed/GoldenSun'

export const Helenite : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Hélénite')
    .setIdentifier('helenite')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Hélénite')
    .setDescription(
      <p>
        L'hélénite est un arbustre sauvage produisant des petites baies
        rondes dorées légèrement translucide. C'est une plante rare, et la
        coutume veut que consommer ses fruits porte chance.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Chance +2</>)
        .addEffect(<>Contrôle -2</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addTransformation(AlchemicTransformation.INFUSION, SunriseInfusion)
    .addTransformation(AlchemicTransformation.DECOCTION, ThiefBlessing)
    .addTransformation(AlchemicTransformation.MACERATION, GoldenSun)
    .build()
)
