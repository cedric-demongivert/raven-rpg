import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const AcrobaticParry : Feat = (
  Feat
    .builder()
    .setIdentifier('acrobatic-parry')
    .setName('Parade acrobatique')
    .addKeyword('atout')
    .addKeyword('parade')
    .addKeyword('acrobatie')
    .addKeyword('parade acrobatique')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Acrobatie 15+</>)
        .setDescription(
          <p>
            Le personnage gagne une parade supplémentaire par round, cette
            parade est résolue comme une acrobatie dont le succès aboutit aux
            effets d'une parade standard avec l'arme choisie. Lors d'une parade
            acrobatique le personnage subit un malus de 20% sur sa tentative.
          </p>
        )
        .build()
    )
    .build()
)
