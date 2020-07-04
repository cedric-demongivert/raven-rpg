import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const WindSyrup : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Sirroco')
    .setIdentifier('wind-syrup')
    .setDescription(
      <p>
        Le sirroco, aussi appellée sirop de vent, est le résultat d'une
        macération de plumeaux de pégases préalablement broyés et disous dans
        l'eau, il faut au minimum deux semaines de macération. Cette solution,
        au goût légèrement acidulé et frais est connue pour donner un grand
        sentiment de liberté à celui qui la consomme.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'esquive +2</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Force -2</>)
        .setCost(0)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'acrobatie +2</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Hauteur des sauts +3m (Qa {'>'} 12)</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
