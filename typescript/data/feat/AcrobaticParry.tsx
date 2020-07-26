import React from 'react'

import { Feat } from '../../feat/Feat'

export const AcrobaticParry : Feat = (
  Feat
    .builder()
    .setIdentifier('acrobatic-parry')
    .setName('Parade acrobatique')
    .addKeyword('atout')
    .addKeyword('parade')
    .addKeyword('acrobatie')
    .addKeyword('parade acrobatique')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Acrobatie 15+ <br/> <br/>

        <p>
          Le personnage gagne une parade supplémentaire par round, cette
          parade est résolue comme une acrobatie dont le succès aboutit aux
          effets d'une parade standard avec l'arme choisie. Lors d'une parade
          acrobatique le personnage subit un malus de 4 points sur sa tentative.
        </p>
      </>
    )
    .build()
)
