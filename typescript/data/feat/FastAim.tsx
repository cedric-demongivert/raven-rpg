import React from 'react'

import { Feat } from '../../feat/Feat'

export const FastAim : Feat = (
  Feat
    .builder()
    .setIdentifier('fast-aim')
    .setName('Visée rapide [Arc]')
    .addKeyword('atout')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Maîtrise de l'arme choisie 8+ <br/> <br/>

        <p>
          Le personnage ne subit aucun malus de visé quand il recharge, vise et
          tire en une unique action.
        </p>
      </>
    )
    .build()
)
