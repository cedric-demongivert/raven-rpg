import React from 'react'

import { Feat } from '../../feat/Feat'

export const FlashDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('flash-dodge')
    .setName('Esquive instinctive')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('contrôle')
    .addKeyword('esquive instinctive')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Esquive 14+ <br/>
        Contrôle 12- <br/>
        Dextérité 14+ <br/>

        <p>
          Le personnage peut tenter d'esquiver les flèches moyennant une
          résolution par opposition entre sa maîtrise de l'esquive réduite de 6
          points et le degré de maîtrise de l'arme du tireur. Cette esquive est
          décomptée du nombre d'esquive du personnage et fait l'objet de tous
          les malus d'esquive connexes si applicable.
        </p>
      </>
    )
    .build()
)
