import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const ChainDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('chain-dodge')
    .setName('Esquive en chaîne')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('esquive en chaîne')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive 8+</>)
        .setDescription(
          <p>
            Le personnage gagne une esquive supplémentaire par round, chaque
            esquive supplémentaire jouée durant un round se voit attribuée un
            malus de 10% cumulatif.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive 12+</>)
        .addRequirement(<>Esquive en chaîne I</>)
        .setDescription(
          <p>
            Le personnage gagne deux esquives supplémentaire par round, chaque
            esquive supplémentaire jouée durant un round se voit attribuée un
            malus de 10% cumulatif.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive 16+</>)
        .addRequirement(<>Dextérité 16+</>)
        .addRequirement(<>Esquive en chaîne II</>)
        .setDescription(
          <p>
            Le personnage gagne trois esquives supplémentaire par round, chaque
            esquive supplémentaire jouée durant un round se voit attribuée un
            malus de 10% cumulatif.
          </p>
        )
        .build()
    )
    .build()
)
