import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const CounterAttack : Feat = (
  Feat
    .builder()
    .setIdentifier('counter-attack')
    .setName('Contre attaque')
    .addKeyword('atout')
    .addKeyword('contre attaque')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise d'arme légère 6+</>)
        .setDescription(
          <p>
            Une fois par round, un personnage équipé d'une arme légère possédant
            cet atout et venant de parer un coup peut toujours choisir de contre
            attaquer gratuitement. Les rôles du défenseur et de l'attaquant sont
            alors inversé.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise d'arme légère 12+</>)
        .addRequirement(<>Contre attaque I</>)
        .setDescription(
          <p>
            Deux fois par round, un personnage équipé d'une arme légère
            possédant cet atout et venant de parer un coup peut toujours choisir
            de contre attaquer gratuitement. Les rôles du défenseur et de
            l'attaquant sont alors inversé.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Maîtrise d'arme légère 20+</>)
        .addRequirement(<>Contre attaque II</>)
        .setDescription(
          <p>
            Trois fois par round, un personnage équipé d'une arme légère
            possédant cet atout et venant de parer un coup peut toujours choisir
            de contre attaquer gratuitement. Les rôles du défenseur et de
            l'attaquant sont alors inversé.
          </p>
        )
        .build()
    )
    .build()
)
