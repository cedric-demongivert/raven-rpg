import React from 'react'

import { Feat } from '../../feat/Feat'

export const BullCharge : Feat = (
  Feat
    .builder()
    .setIdentifier('bull-charge')
    .setName('Charge du taureau')
    .addKeyword('atout')
    .addKeyword('force')
    .addKeyword('armure lourde')
    .addKeyword('charge')
    .addKeyword('charge du taureau')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Force 12+ <br/>
        Armures lourdes 5+ <br/> <br/>

        <p>
          Lors d'une charge, ajoutez 1 point de dégât physique supplémentaire
          tous les 4 points de charge utilisés.
        </p>

        <p>
          Si le personnage possède une force supérieure ou égale à 14 points et
          une maîtrise du port des armures lourdes supérieure ou égale à 10
          points le ratio passe alors de 1 pour 4 à 1 pour 2.
        </p>

        <p>
          Si le personnage possède une force supérieure ou égale à 16 points et
          une maîtrise du port des armures lourdes supérieure ou égale à 15
          points le ratio passe alors de 1 pour 4 à 1 pour 1.
        </p>
      </>
    )
    .build()
)
