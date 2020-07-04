import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

import { DreamstarInfusion } from '../processed/DreamstarInfusion'
import { CourrierBlessing } from '../processed/CourrierBlessing'
import { MorpheaNectar } from '../processed/MorpheaNectar'

export const Dreamstar : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Songétoile')
    .setIdentifier('dreamstar')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Songétoile')
    .setDescription(
      <p>
        La songétoile, aussi appellée sauge étoilée est une espèce de sauge
        formant des petites fleures blanches de forme étoilée. Elle pousse
        particulièrement proche des cours d'eau et peut être trouvée même en
        plein hiver. Infusée c'est une plante aux vertues appaisante
        augmentant à la fois la concentration et facilitant le sommeil.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Contrôle +2</>)
        .addEffect(<>Constitution -2</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addTransformation(AlchemicTransformation.INFUSION, DreamstarInfusion)
    .addTransformation(AlchemicTransformation.DECOCTION, CourrierBlessing)
    .addTransformation(AlchemicTransformation.MACERATION, MorpheaNectar)
    .build()
)
