import React from 'react'

import { Feat } from '../../feat/Feat'

export const WeakeningPunch : Feat = (
  Feat
    .builder()
    .setIdentifier('weakening-punch')
    .setName('Frappe rupture')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise du combat à mains-nue 15+ <br/>
        Force 14+ <br/> <br/>

        <p>
          Les coups de poings portés par le personnage provoquent la perte d'un
          point d'armure.
        </p>
      </>
    )
    .build()
)
