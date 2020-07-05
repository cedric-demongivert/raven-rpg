import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

import { CeruleanInfusion } from '../processed/CeruleanInfusion'
import { ParagonBlessing } from '../processed/ParagonBlessing'
import { NobleBlood } from '../processed/NobleBlood'

export const CeruleanLily : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Lys azuré')
    .setIdentifier('cerulean-lily')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Lys azuré')
    .setDescription(
      <p>
        Le lys azuré est une plante à bulbe qui ne s'ouvre que la nuit. Elle
        est connue pour sa teinte azuré et sa faible fluorescence. C'est une
        plante magnifique mais à manipuler avec précotion : elle est connue
        pour contenir une quantitée concentrée d'ether. La pousse du lys azuré
        est assez ératique et il n'est jamais garantie que la terre choisie
        pour le planter lui convienne. Il est utilisé dans la production de
        liqueur de lys aussi appellée sang des rois.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Intoxication à l'éther +2</>)
        .setCost(0)
        .setDuration(<>~</>)
        .build()
    )
    .addTransformation(AlchemicTransformation.INFUSION, CeruleanInfusion)
    .addTransformation(AlchemicTransformation.DECOCTION, ParagonBlessing)
    .addTransformation(AlchemicTransformation.MACERATION, NobleBlood)
    .build()
)
