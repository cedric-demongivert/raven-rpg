import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const DoubleSkin : Feat = (
  Feat
    .builder()
    .setIdentifier('double-skin')
    .setName('Seconde peau')
    .addKeyword('atout')
    .addKeyword('armure légère')
    .addKeyword('seconde peau')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Armures légères 8+</>)
        .setDescription(
          <p>
            Toutes les armures légères voient leur poids réduit de 1 point pour
            un minimum de 0 points.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Armures légères 16+</>)
        .addRequirement(<>Seconde peau I</>)
        .setDescription(
          <p>
            Toutes les armures légères voient leur poids réduit de 2 point pour
            un minimum de 0 points.
          </p>
        )
        .build()
    )
    .build()
)
