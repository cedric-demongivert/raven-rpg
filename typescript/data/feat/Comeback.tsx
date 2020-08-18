import React from 'react'

import { Feat } from '../../feat/Feat'

export const Comeback : Feat = (
  Feat
    .builder()
    .setIdentifier('comeback')
    .setName('Increvable')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Volonté 10+ <br/>
        Constitution ou force 13+ <br/> <br/>

        <p>
          Quand un personnage possédant cet atout doit tomber dans le coma il
          peut toujours choisir de sombrer dans la folie et se relever avec le
          cinquième de ses points de vie totaux.
        </p>
      </>
    )
    .build()
)
