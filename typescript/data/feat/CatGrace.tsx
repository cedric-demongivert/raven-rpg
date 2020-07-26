import React from 'react'

import { Feat } from '../../feat/Feat'

export const CatGrace : Feat = (
  Feat
    .builder()
    .setIdentifier('cat-grace')
    .setName('Grâce féline')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Dextérité 14+ <br/>
        Acrobatie 10+ <br/> <br/>

        <p>
          Si des suites des actions d'un tiers ou de ses propres décisions, un
          personnage vient à tomber à terre il peut alors effectuer un test
          d'opposition entre son score d'acrobatie et un degré de difficulté de
          15 points pour se rattraper in-extremis. Si le jet est réussi le
          personnage ne tombe pas à terre et peut effectuer son round en cours
          normalement. Si le test échoue le personnage tombe à terre.
        </p>
      </>
    )
    .build()
)
