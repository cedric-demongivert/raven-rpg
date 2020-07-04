import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const PandoraInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de pandore')
    .setIdentifier('pandora-infusion')
    .setDescription(
      <p>
        L'infusion de pandore est une solution d'écorce de pandore portée à
        ébulition pendant une petite dizaine de minute. Cette infusion est
        connue des anciens druides et des médecins de guerre pour être une
        option viable permettant de faciliter le traitement des hémoragies.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Coagulant</>)
        .setCost(1)
        .setDuration(<>1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Constitution +1</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
