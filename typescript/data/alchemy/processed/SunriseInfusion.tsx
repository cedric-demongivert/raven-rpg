import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const SunriseInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de l\'aube')
    .setIdentifier('sunrise-infusion')
    .setDescription(
      <p>
        L'infusion de l'aube est une solution de baies d'hélénite portée à
        ébulition pendant une petite dizaine de minute. Ce liquide couleur
        d'ambre est connu pour son goût fruité. Il était consommé par les
        familles de paysant à l'aube comme tonique pour bien démarrer les
        longues journées de travail. La rumeur dit aussi que cette infusion
        adoucit le destin et porte bonheur, une théorie qui n'a cependant jamais
        sorti personne de la misère.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Tonique</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Chance +1</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
