import React from 'react'

import { Feat } from '../../feat/Feat'

export const DoubleSkin : Feat = (
  Feat
    .builder()
    .setIdentifier('double-skin')
    .setName('Seconde peau')
    .addKeyword('atout')
    .addKeyword('armure légère')
    .addKeyword('seconde peau')
    .setDescription(
      <>
        <strong>Prérequis :</strong> <br/>
        Armures légères 8+ <br/>

        <p>
          Toutes les armures légères voient leur poids réduit de 1 point pour
          chaque groupe de 8 points de maîtrise des armures légères du
          personnage. Le poids d'une armure ne peut jamais valoir moins de 0
          points.
        </p>
      </>
    )
    .build()
)
