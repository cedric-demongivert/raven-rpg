import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const AtlasBurden : Feat = (
  Feat
    .builder()
    .setIdentifier('atlas-burden')
    .setName('Fardeau d\'Atlas')
    .addKeyword('atout')
    .addKeyword('constitution')
    .addKeyword('fardeau d\'atlas')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 14+</>)
        .setDescription(
          <p>
            Gagnez 1 point de charge supplémentaire tous les 4 point de charge
            effectif.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 18+</>)
        .setDescription(
          <p>
            Gagnez 1 point de charge supplémentaire tous les 2 point de charge
            effectif.
          </p>
        )
        .build()
    )
    .build()
)
