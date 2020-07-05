import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const BloodyBellsInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de sanguine')
    .setIdentifier('bloody-bells-infusion')
    .setDescription(
      <p>
        L'infusion de sanguine est une solution de cloches de sanguine portées à
        ébulition pendant une petite dizaine de minute. Cette infusion est
        connue pour provoquer une légère hyperactivité passagère.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Antie-paralysie</>)
        .setCost(1)
        .setDuration(<>1<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Initiative +4</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
