import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const HunterBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du chasseur')
    .setIdentifier('hunter-blessing')
    .setDescription(
      <p>
        La bénédiction du chasseur est une décoction de plumeaux de pégase dans
        l'eau. Elle à longtemps été utilisé par les premiers chasseurs du
        continent pour garantir une chasse fructueuse, puis comme drogue pour
        les divisions d'archer des premières civilisations.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Perception +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'arc long +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'arc court +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
