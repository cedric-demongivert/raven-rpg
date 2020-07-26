import React from 'react'

import { Feat } from '../../feat/Feat'

export const BloodThirst : Feat = (
  Feat
    .builder()
    .setIdentifier('blood-thirst')
    .setName('Soif de sang')
    .addKeyword('atout')
    .addKeyword('controle')
    .addKeyword('soif de sang')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Contrôle 14- <br/> <br/>

        <p>
          Gagnez 1 point d'initiative supplémentaire tous les 4 points de vie
          perdus. Si le personnage possède 10 points de contrôle ou moins il
          gagne alors 1 point d'initiative supplémentaire tous les 2 points de
          vie perdus.
        </p>
      </>
    )
    .build()
)
