import React from 'react'

import { Feat } from '../../feat/Feat'

export const DefensiveStyle : Feat = (
  Feat
    .builder()
    .setIdentifier('defensive-style')
    .setName('Style défensif [Arme\xa0à\xa0une\xa0main]')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('style défensif')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 5+ <br/> <br/>

        <p>
          Un personnage possédant cet atout gagne une parade supplémentaire par
          round pour chaque groupe de 5 points dans la maîtrise de l'arme
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
