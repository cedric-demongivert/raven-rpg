import React from 'react'

import { Feat } from '../../feat/Feat'

export const OpenBar : Feat = (
  Feat
    .builder()
    .setIdentifier('open-bar')
    .setName('Violence gratuite [Arme\xa0de\xa0corps\xa0à\xa0corps]')
    .addKeyword('atout')
    .addKeyword('dextérité')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Dextérité 12+ <br/>
        Maîtrise de l'arme choisie 10+ <br/> <br/>

        <p>
          Un personnage possédant cet atout double ses chances de porter un
          coup critique lorsqu'il fappre un adversaire ne pouvant ni parer, ni
          esquiver.
        </p>

        <p>
          Cet atout peut être choisi plusieurs fois pour pouvoir en bénéficier
          avec différentes armes.
        </p>
      </>
    )
    .build()
)
