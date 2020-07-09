import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const DefensiveStyle : Feat = (
  Feat
    .builder()
    .setIdentifier('defensive-style')
    .setName('Style défensif')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('style défensif')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 5+</>)
        .setDescription(
          <p>
            Gagne une parade supplémentaire à l'épée courte par round.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 10+</>)
        .addRequirement(<>Style défensif I</>)
        .setDescription(
          <p>
            Gagne deux parades supplémentaires à l'épée courte par round.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 17+</>)
        .addRequirement(<>Dextérité 12+</>)
        .addRequirement(<>Style défensif II</>)
        .setDescription(
          <p>
            Gagne trois parades supplémentaires à l'épée courte par round.
          </p>
        )
        .build()
    )
    .build()
)
