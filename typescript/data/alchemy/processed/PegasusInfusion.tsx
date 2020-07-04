import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const PegasusInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de pégase')
    .setIdentifier('pegasus-infusion')
    .setDescription(
      <p>
        L'infusion de pégase est un tonique ancestral consommé par les premiers
        chasseurs du continent. Cette infusion de plumeau de pégase est reconnue
        pour provoquer chez son consommateur à la fois une vague sensation de
        légèreté et une intensification des sens.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Mouvement +4m</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Dextérité +1</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
