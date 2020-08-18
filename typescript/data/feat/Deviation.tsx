import React from 'react'

import { Feat } from '../../feat/Feat'

export const Deviation : Feat = (
  Feat
    .builder()
    .setIdentifier('deviation')
    .setName('Déviation')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise du combat à mains nues 10+ <br/>
        Dextérité 14+ <br/> <br/>

        <p>
          Pour chaque groupe de 10 points de combat à mains-nue, le personnage
          peut tenter de parrer en déviant l'arme de son adversaire. Les armes
          lourdes sont bien plus difficile à dévier et entraînent un malus de
          5 points sur la tentative de parade.
        </p>
      </>
    )
    .build()
)
