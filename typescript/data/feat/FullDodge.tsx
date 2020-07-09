import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const FullDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('full-dodge')
    .setName('Esquive totale')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('esquive totale')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Esquive	5+</>)
        .setDescription(
          <p>
            Au prix d'une action de mouvement, le personnage peut toujours
            choisir de jouer en dernier et de gagner une esquive supplémentaire
            lors du round en cours.
          </p>
        )
        .build()
    )
    .build()
)
