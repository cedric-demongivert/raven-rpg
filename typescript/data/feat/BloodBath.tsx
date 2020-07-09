import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const BloodBath : Feat = (
  Feat
    .builder()
    .setIdentifier('blood-bath')
    .setName('Bain de sang (!)')
    .addKeyword('atout')
    .addKeyword('hache')
    .addKeyword('dague')
    .addKeyword('controle')
    .addKeyword('bain de sang')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Haches ou Dagues 8+</>)
        .addRequirement(<>Contrôle 14-</>)
        .setDescription(
          <p>
            Infligez 1 point de dégât supplémentaire tous les 4 points de vie
            perdus.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Haches ou Dagues 16+</>)
        .addRequirement(<>Contrôle 10-</>)
        .addRequirement(<>Bain de sang I</>)
        .setDescription(
          <p>
            Infligez 1 point de dégât supplémentaire tous les 2 points de vie
            perdus.
          </p>
        )
        .build()
    )
    .build()
)
