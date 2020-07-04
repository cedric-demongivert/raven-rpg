import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const CourrierBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du messager')
    .setIdentifier('courrier-blessing')
    .setDescription(
      <>
        <p>
          La bénédiction du messager est une décoction de songétoile dans
          l'eau. C'est un liquide noir pailletée de grains azurées longtemps
          utilisé par les messagers à cheval pour son caractère appaisant
          permettant de courts sommeils particulièrement réparateurs entre deux
          longues courses à cheval.
        </p>

        <p>
          <strong>Sommeil réparateur.</strong> Le sommeil réparateur est un
          effet permettant de diviser par deux le temps de sommeil nécéssaire
          à un personnage pour dormir. Pour un homme cet effet permet notamment
          de ne dormir que 4 heures en place de 8. Un personnage gagne 1 point
          de vie supplémentaire par groupe de 5 points de constitution qu'il
          possède des suites d'un sommeil réparateur.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'épée +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'équitation +2</>)
        .setCost(1)
        .setDuration(<>20<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Sommeil réparateur</>)
        .setCost(1)
        .setDuration(<>20<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
