import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const BloodThirst : Feat = (
  Feat
    .builder()
    .setIdentifier('blood-thirst')
    .setName('Soif de sang (!)')
    .addKeyword('atout')
    .addKeyword('constitution')
    .addKeyword('controle')
    .addKeyword('soif de sang')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 14+</>)
        .addRequirement(<>Contrôle 14-</>)
        .setDescription(
          <p>
            Gagnez 1 point d'initiative supplémentaire tous les 4 points de vie
            perdus.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 18+</>)
        .addRequirement(<>Contrôle 10-</>)
        .addRequirement(<>Soif de sang I</>)
        .setDescription(
          <p>
            Gagnez 1 point d'initiative supplémentaire tous les 2 points de vie
            perdus.
          </p>
        )
        .build()
    )
    .build()
)
