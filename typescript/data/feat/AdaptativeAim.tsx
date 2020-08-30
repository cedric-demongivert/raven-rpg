import React from 'react'

import { Feat } from '../../feat/Feat'

export const AdaptativeAim : Feat = (
  Feat
    .builder()
    .setIdentifier('adaptative-aim')
    .setName('Visée adaptative [Arc]')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+ <br/> <br/>

        <p>
          Un personnage possédant cet atout et échouant à toucher un adversaire
          lors d'une attaque à distance obtient un avantage cumulatif de deux
          points sur sa prochaine tentative de tir visant la même cible. Le
          bonus retombe à zéro si le personnage touche, ou s'il change de cible.
        </p>
      </>
    )
    .build()
)
