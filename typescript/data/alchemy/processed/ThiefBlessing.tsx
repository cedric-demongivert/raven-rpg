import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const ThiefBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du voleur')
    .setIdentifier('thief-blessing')
    .setDescription(
      <p>
        La bénédiction du voleur est une décoction de baies d'hélénite dans
        l'eau. Elle est connue pour atténuer les doutes et provoquer une légère
        trance, comme un brouillard, dans lequel le sujet est plus alerte à des
        petits détails importants. Cette décoction a donc été pendant longtemps
        la marotte des voleurs en tout genre pour guider leur mains vers les
        poches bien remplies des passants.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de la dague +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise du vol à la tire +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise du crochetage +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
