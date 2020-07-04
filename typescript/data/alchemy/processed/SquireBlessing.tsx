import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const SquireBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction de l\'écuyer')
    .setIdentifier('squire-blessing')
    .setDescription(
      <p>
        La bénédiction de l'écuyer est une décoction d'écorce de pandore dans
        l'eau. C'est une drogue tonifiante facilitant notamment le port de
        l'armure et la tenue d'un bouclier. Celle-ci avait un certain succès
        auprès des premiers aspirants chevaliers qui souhaitaient se faire
        remarquer au cours des entraînements.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'armure intermédiaire +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise du bouclier +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'armure légère +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
