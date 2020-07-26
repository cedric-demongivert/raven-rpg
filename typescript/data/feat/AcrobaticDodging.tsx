import React from 'react'

import { Feat } from '../../feat/Feat'

export const AcrobaticDodging : Feat = (
  Feat
    .builder()
    .setIdentifier('acrobatic-dodging')
    .setName('Esquive acrobatique')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('acrobatie')
    .addKeyword('esquive acrobatique')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Acrobatie 10+ <br/>

        <p>
          Le personnage gagne une esquive acrobatique supplémentaire par
          round, une esquive acrobatique est résolue comme une acrobatie dont
          le succès aboutit aux effets d'une esquive standard. Lors d'une
          esquive acrobatique le personnage subit un malus de 4 points sur sa
          tentative d'esquive.
        </p>
      </>
    )
    .build()
)
