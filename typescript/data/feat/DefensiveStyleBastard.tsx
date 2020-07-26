import React from 'react'

import { Feat } from '../../feat/Feat'

export const DefensiveStyleBastard : Feat = (
  Feat
    .builder()
    .setIdentifier('defensive-style-bastard')
    .setName('Style défensif [Arme\xa0bâtarde]')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('style défensif')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 10+ <br/>

        <p>
          Un personnage possédant cet atout gagne une parade supplémentaire par
          round pour chaque groupe de 10 points dans la maîtrise de l'arme
          choisie. Un personnage ne peut pas faire l'objet d'un nombre de
          parade supplémentaire par round qui soit supérieur à son modificateur
          de dextérité augmenté de 1 point.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
