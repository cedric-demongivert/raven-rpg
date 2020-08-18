import React from 'react'

import { Feat } from '../../feat/Feat'

export const StormStrike : Feat = (
  Feat
    .builder()
    .setIdentifier('storm-strike')
    .setName('Déluge de coup')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise du combat à mains nues 4+ <br/>
        Dextérité 14+ <br/> <br/>

        <p>
          Un personnage possédant cet atout décidant de frapper à outrance son
          adversaire à l'aide de ses poings peut tenter de porter un nombre de
          coup supplémentaire équivalent à son nombre de points de maîtrise du
          combat à mains-nues divisé par 4.
        </p>
      </>
    )
    .build()
)
