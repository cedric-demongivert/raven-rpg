import React from 'react'

import { Feat } from '../../feat/Feat'

export const Swashbuckler : Feat = (
  Feat
    .builder()
    .setIdentifier('swashbuckler')
    .setName('Bretteur')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'épée courte 6+ <br/>

        <p>
          Le personnage gagne une parade supplémentaire par tour pour chaque
          groupe de 6 points de maîtrise de l'épée courte effectif.
        </p>
      </>
    )
    .build()
)
