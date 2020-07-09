import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const Twisted : Feat = (
  Feat
    .builder()
    .setIdentifier('twisted')
    .setName('Coup retord')
    .addKeyword('atout')
    .addKeyword('dague')
    .addKeyword('coup retord')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise d'arme 15+</>)
        .setDescription(
          <p>
            Une fois par round quand le personnage échoue une tentative
            d'attaque il peut retenter sa chance moyennant un malus
            supplémentaire de 40% sur le jet de touche. Si le second coup porte
            les dégâts sont divisés par deux et arrondi à l'entier inférieur,
            minimum un point de dégât de chaque type proposé par l'arme.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise d'arme 20+</>)
        .addRequirement(<>Dextérité 16+</>)
        .addRequirement(<>Coup retord I</>)
        .setDescription(
          <p>
            Deux fois par round quand le personnage échoue une tentative
            d'attaque il peut retenter sa chance moyennant un malus
            supplémentaire de 40% sur le jet de touche. Si le second coup porte
            les dégâts sont divisés par deux et arrondi à l'entier inférieur,
            minimum un point de dégât de chaque type proposé par l'arme.
          </p>
        )
        .build()
    )
    .build()
)
