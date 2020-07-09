import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const Hacker : Feat = (
  Feat
    .builder()
    .setIdentifier('hacker')
    .setName('Hacker (!)')
    .addKeyword('atout')
    .addKeyword('dague')
    .addKeyword('hacker')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise de la dague 10+</>)
        .setDescription(
          <p>
            Un fois par round, en guise d'attaque à outrance, un personnage armé
            d'une dague peut toujours choisir d'ignorer tout ou partie de
            l'armure de son adversaire. A cette fin le personnage doit réussir
            une attaque normale plus un jet d'opposition entre sa maîtrise de la
            dague et le nombre de point d'armure à ignorer multiplié par quatre.
            Si le second jet réussi l'assassin porte alors un coup ignorant tout
            ou partie de l'armure de son adversaire.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise de la dague 20+</>)
        .addRequirement(<>Dextérité 14+</>)
        .addRequirement(<>Hacker I</>)
        .setDescription(
          <p>
            Un fois par round, en guise d'attaque à outrance, un personnage armé
            d'une dague peut toujours choisir d'ignorer tout ou partie de
            l'armure de son adversaire. A cette fin le personnage doit réussir
            une attaque normale plus un jet d'opposition entre sa maîtrise de la
            dague et le nombre de point d'armure à ignorer multiplié par deux.
            Si le second jet réussi l'assassin porte alors un coup ignorant tout
            ou partie de l'armure de son adversaire.
          </p>
        )
        .build()
    )
    .build()
)
