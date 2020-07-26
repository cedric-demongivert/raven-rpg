import React from 'react'

import { Feat } from '../../feat/Feat'

export const WindDance : Feat = (
  Feat
    .builder()
    .setIdentifier('wind-dance')
    .setName('Danse des vents')
    .addKeyword('atout')
    .addKeyword('esquive')
    .addKeyword('danse des vents')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Esquive 20+ <br/> <br/>

        <p>
          Avec cet atout le malus attribué à un enchaînement d'esquive durant
          un round est réduit à 1 point cumulatif.
        </p>
      </>
    )
    .build()
)
