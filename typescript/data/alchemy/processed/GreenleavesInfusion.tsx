import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const GreenleavesInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de verderelle')
    .setIdentifier('greenleaves-infusion')
    .setDescription(
      <>
        <p>
          L'infusion de verderelle est connue pour ses vertues d'antidote ainsi
          que pour les douloureux maux de têtes qu'elle peut provoquer aux
          individus n'ayant pas la présence d'esprit de la faire bouillir un
          peut plus longtemps que les autres infusions.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Fièvre</>)
        .setCost(0)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Antidote</>)
        .setCost(1)
        .setDuration(<>1<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .build()
)
