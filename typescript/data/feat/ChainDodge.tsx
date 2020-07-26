import React from 'react'

import { Feat } from '../../feat/Feat'

export const ChainDodge : Feat = (
  Feat
    .builder()
    .setIdentifier('chain-dodge')
    .setName('Esquive en chaîne')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('esquive en chaîne')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Esquive 5+ <br/> <br/>

        <p>
          Le personnage gagne une esquive supplémentaire par round pour chaque
          groupe de 5 points de maîtrise de l'esquive qu'il possède. Un
          personnage ne peut pas faire l'objet d'un nombre d'esquive bonus par
          round qui soit supérieur à son modificateur de dextérité augmenté de
          1 point. Chaque esquive supplémentaire jouée durant un round se voit
          attribuée un malus de 2 points cumulatif.
        </p>
      </>
    )
    .build()
)
