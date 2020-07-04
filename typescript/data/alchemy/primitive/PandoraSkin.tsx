import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

import { PandoraInfusion } from '../processed/PandoraInfusion'
import { TreeBlood } from '../processed/TreeBlood'
import { SquireBlessing } from '../processed/SquireBlessing'

export const PandoraSkin : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Écorce de pandore')
    .setIdentifier('pandora-skin')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Écorce de pandore')
    .setDescription(
      <p>
        L'écorce de pandore est en réalité un champignon symbiote formant de
        curieuses spirales que l'on peut retrouver sur certains arbres très
        endomagés. De couleur noire virant sur le violet très foncé il se
        nourrit d'une partie de la sève de son hôte tout en remplaçant
        d'une partie de son écorce endomagée.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Constitution +2</>)
        .addEffect(<>Dextérité -2</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addTransformation(AlchemicTransformation.INFUSION, PandoraInfusion)
    .addTransformation(AlchemicTransformation.DECOCTION, SquireBlessing)
    .addTransformation(AlchemicTransformation.MACERATION, TreeBlood)
    .build()
)
