import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const Diehard : Feat = (
  Feat
    .builder()
    .setIdentifier('defensive-diehard')
    .setName('Dur à cuir')
    .addKeyword('atout')
    .addKeyword('constitution')
    .addKeyword('dur à cuir')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 14+</>)
        .setDescription(
          <p>
            Gagnez 1 point de vie supplémentaire tous les 4 points de vie
            effectif. Vous mourrez toujours si vous accumulez plus de 150% de
            votre <strong>constitution</strong> en dégâts.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Constitution 18+</>)
        .addRequirement(<>Dur à cuir I</>)
        .setDescription(
          <p>
            Gagnez 1 point de vie supplémentaire tous les 2 points de vie
            effectif. Vous mourrez toujours si vous accumulez plus de 150% de
            votre <strong>constitution</strong> en dégât.
          </p>
        )
        .build()
    )
    .build()
)
