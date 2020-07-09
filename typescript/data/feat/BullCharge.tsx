import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

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
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Force 12+</>)
        .addRequirement(<>Armures lourdes 5+</>)
        .setDescription(
          <p>
            Lors d'une charge, ajouter un point de dégât physique supplémentaire
            tous les 4 points de charge utilisés.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Force 14+</>)
        .addRequirement(<>Armures lourdes 10+</>)
        .addRequirement(<>Charge du taureau I</>)
        .setDescription(
          <p>
            Lors d'une charge, ajouter un point de dégât physique supplémentaire
            tous les 2 points de charge utilisés.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Force 18+</>)
        .addRequirement(<>Armures lourdes 18+</>)
        .addRequirement(<>Charge du taureau II</>)
        .setDescription(
          <p>
            Lors d'une charge, ajouter un point de dégât physique supplémentaire
            par point de charge utilisé.
          </p>
        )
        .build()
    )
    .build()
)
