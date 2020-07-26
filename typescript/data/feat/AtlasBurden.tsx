import React from 'react'

import { Feat } from '../../feat/Feat'

export const AtlasBurden : Feat = (
  Feat
    .builder()
    .setIdentifier('atlas-burden')
    .setName('Fardeau d\'Atlas')
    .addKeyword('atout')
    .addKeyword('constitution')
    .addKeyword('fardeau d\'atlas')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Constitution 14+ <br/> <br/>

        <p>
          Gagnez 1 point de charge supplémentaire par groupe de 4 points de
          constitution au dessus de 10 pour chaque groupe de 4 points de force
          effectif.
        </p>
      </>
    )
    .build()
)
