import React from 'react'

import { Feat } from '../../feat/Feat'

export const BloodBath : Feat = (
  Feat
    .builder()
    .setIdentifier('blood-bath')
    .setName('Bain de sang')
    .addKeyword('atout')
    .addKeyword('controle')
    .addKeyword('bain de sang')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Contrôle 14- <br/>

        <p>
          Infligez 1 point de dégât supplémentaire tous les 4 points de vie
          perdus. Si le personnage possède 10 points de contrôle ou moins il
          inflige alors 1 point de dégât supplémentaire tous les 2 points de
          vie perdus.
        </p>
      </>
    )
    .build()
)
