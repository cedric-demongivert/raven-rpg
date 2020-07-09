import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const FlashDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('flash-dodge')
    .setName('Esquive instinctive')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('contrôle')
    .addKeyword('esquive instinctive')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive	14+</>)
        .addRequirement(<>Contrôle 12-</>)
        .setDescription(
          <p>
            Le personnage peut tenter d'esquiver les flèches moyennant un malus
            de 30% sur son jet d'esquive.
          </p>
        )
        .build()
    )
    .build()
)
