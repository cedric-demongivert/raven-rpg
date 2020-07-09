import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const EagleCharge : Feat = (
  Feat
    .builder()
    .setIdentifier('eagle-charge')
    .setName('Charge de l\'aigle')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('charge de l\'aigle')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes	10+</>)
        .setDescription(
          <p>
            Lors d'une charge un personnage possédant cet atout peut toujours
            choisir d'échanger une parade à l'épée courte contre une attaque
            supplémentaire. Les attaques supplémentaires se résolvent comme des
            attaques standard avec un malus de 10% par attaque déjà portée. Les
            bénefices de la charge s'appliquent à l'ensemble des coups portés.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 20+</>)
        .addRequirement(<>Dextérité 14+</>)
        .addRequirement(<>Charge de l'aigle I</>)
        .setDescription(
          <p>
            Lors d'une charge un personnage possédant cet atout peut toujours
            choisir d'échanger jusqu'à deux parades à l'épée courte contre une
            attaque supplémentaire. Les attaques supplémentaires se résolvent
            comme des attaques standard avec un malus de 10% par attaque déjà
            portée. Les bénefices de la charge s'appliquent à l'ensemble des
            coups portés.
          </p>
        )
        .build()
    )
    .build()
)
