import React from 'react'

import { Feat } from '../../feat/Feat'

export const FullDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('full-dodge')
    .setName('Esquive totale')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('esquive totale')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Esquive	5+ <br/>

        <p>
          Le personnage peut toujours choisir de jouer en dernier et de gagner
          une esquive supplémentaire lors du round en cours.
        </p>
      </>
    )
    .build()
)
