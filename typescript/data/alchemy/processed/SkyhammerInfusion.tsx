import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const SkyhammerInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de marterage')
    .setIdentifier('skyhammer-infusion')
    .setDescription(
      <p>
        L'infusion de marterage est une solution comprenant de la marterage
        portée à ébulition pendant une petite dizaine de minute. Le liquide
        de couleur orangé qui en résulte est particulièrement épicé et est connu
        pour son effet sur la capacité musculaire. C'était une drogue utilisée
        pour supporter les travaux de gros oeuvres et pour soigner les douleurs
        chroniques.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Antidouleur</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Force +1</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
