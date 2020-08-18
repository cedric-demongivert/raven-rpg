import React from 'react'

import { Feat } from '../../feat/Feat'

export const AgainstDestiny : Feat = (
  Feat
    .builder()
    .setIdentifier('against-destiny')
    .setName('Défier le destin')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Volonté 15+ <br/> <br/>

        <p>
          Un personnage possédant cet atout et devant sombrer dans la folie peut
          toujours tenter de défier le destin afin de passer une dernière fois
          un test de désespoir dans le but d'agir héroïquement. Un personnage
          faisant usage de cet atout est systématiquement affligé d'un point de
          fatalité.
        </p>
      </>
    )
    .build()
)
