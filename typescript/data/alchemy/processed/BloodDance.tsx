import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const BloodDance : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Valse rouge')
    .setIdentifier('blood-dance')
    .setDescription(
      <>
        <p>
          La valse rouge, aussi appellée sang de rose ou liqueur de rubis, est
          le résultat d'une macération de sanguine pendant un minimum de deux
          semaines. Le résultat est un liquide couleur rubis légèrement
          translucide qui fluidifie dangereusement le sang. L'on dit aussi de
          cette solution qu'elle provoque la sensation de ne faire qu'un avec
          son environnement. Ce poison extrêmement dangereux qui peut provoquer
          d'atroces hémoragies à la moindre coupure a longtemps été exploitée
          par des sectes d'épéistes suicidaires qui transformait le duel à
          l'épée en danse mortelles d'une grâce sans pareil.
        </p>

        <p>
          <strong>Hémoragie.</strong> Quand la victime de cet effet subis une
          blessure légère il doit réussir un test d'opposition entre sa
          constitution et un degré de difficulté équivalent à la qualité du
          poison. Si le test échoue la blessure devient alors une blessure
          grave hémoragique.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Parade + 1</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Esquive + 1</>)
        .setCost(2)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Hémoragie</>)
        .setCost(0)
        .setDuration(<>2<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Bestialité +2</>)
        .setCost(1)
        .setDuration(<>~</>)
        .build()
    )
    .build()
)
