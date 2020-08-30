import React from 'react'

import { Feat } from '../../feat/Feat'

export const CriticalLuck : Feat = (
  Feat
    .builder()
    .setIdentifier('critical-luck')
    .setName('Chance critique')
    .addKeyword('atout')
    .addKeyword('chance')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Chance 14+ <br/> <br/>

        <p>
          Un personnage avec cet atout double ses chances de réaliser un coup
          critique quand il fait usage d'un point de destin.
        </p>
      </>
    )
    .build()
)
