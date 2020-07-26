import React from 'react'

import { Feat } from '../../feat/Feat'

export const Diehard : Feat = (
  Feat
    .builder()
    .setIdentifier('defensive-diehard')
    .setName('Dur à cuir')
    .addKeyword('atout')
    .addKeyword('constitution')
    .addKeyword('dur à cuir')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Constitution 14+ <br/>

        <p>
          Gagnez 1 point de vie supplémentaire pour chaque groupe de 2 points
          de constitution effectif. Vous mourrez toujours si vous accumulez plus
          de 150% de votre <strong>constitution</strong> en dégâts.
        </p>
      </>
    )
    .build()
)
