import React from 'react'

import { Feat } from '../../feat/Feat'

export const MultipleShot : Feat = (
  Feat
    .builder()
    .setIdentifier('multiple-shot')
    .setName('Tir multiple [Arc]')
    .addKeyword('atout')
    .addKeyword('arc court')
    .addKeyword('arc long')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 8+ <br/>
        Dextérité 14+ <br/> <br/>

        <p>
          Lors d'une attaque à outrance à l'arc le personnage peut ajouter une
          flèche supplémentaire pour chaque groupe de 8 points de maîtrise qu'il
          possède. Le personnage subit un malus de 3 points à la touche pour
          chaque flèche supplémentaire tirée. La cible d'un tir multiple ayant
          la capacité d'esquiver des flèches peut tenter d'esquiver l'ensemble
          des flèches d'une traite.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
