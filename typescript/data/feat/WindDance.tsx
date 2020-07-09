import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const WindDance : Feat = (
  Feat
    .builder()
    .setIdentifier('wind-dance')
    .setName('Danse des vents')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('danse des vents')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive 20+</>)
        .setDescription(
          <p>
            Avec cet atout le malus attribué à un enchaînement d'esquive durant
            un round est réduit à 5% cumulatif.
          </p>
        )
        .build()
    )
    .build()
)
