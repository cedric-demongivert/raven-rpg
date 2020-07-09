import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const AcrobaticDodging : Feat = (
  Feat
    .builder()
    .setIdentifier('acrobatic-dodging')
    .setName('Esquive acrobatique')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('acrobatie')
    .addKeyword('esquive acrobatique')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Acrobatie 5+</>)
        .setDescription(
          <p>
            Le personnage gagne une esquive acrobatique supplémentaire par
            round, une esquive acrobatique est résolue comme une acrobatie dont
            le succès aboutit aux effets d'une esquive standard. Lors d'une
            esquive acrobatique le personnage subit un malus de 20% sur sa
            tentative d'esquive.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Acrobatie 10+</>)
        .addRequirement(<>Esquive 5+</>)
        .setDescription(
          <p>
            Le personnage gagne deux esquives acrobatiques supplémentaires par
            round, une esquive acrobatique est résolue comme une acrobatie dont
            le succès aboutit aux effets d'une esquive standard. Lors d'une
            esquive acrobatique le personnage subit un malus de 20% sur sa
            tentative d'esquive.
          </p>
        )
        .build()
    )
    .build()
)
