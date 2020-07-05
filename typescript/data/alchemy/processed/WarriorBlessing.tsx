import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const WarriorBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du guerrier')
    .setIdentifier('warrior-blessing')
    .setDescription(
      <p>
        La bénédiction du guerrier est une décoction de marterage dans l'eau.
        Elle a longtemps été utilisé pour augmenter les performances de petits
        groupes de guerrier d'élite et de gardes du corps, dans certaines
        sociétés c'était aussi une drogue très disputés par les gladiateurs
        soucieux de sortir vivant de leur prochain bain de sang.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Points de charge +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise du marteau de guerre +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de la hache de guerre +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
