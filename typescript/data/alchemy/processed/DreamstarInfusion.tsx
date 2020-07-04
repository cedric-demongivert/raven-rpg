import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const DreamstarInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion de songétoile')
    .setIdentifier('dreamstar-infusion')
    .setDescription(
      <p>
        L'infusion de songétoile est une solution de songétoile portée à
        ébulition pendant une petite dizaine de minute. Cette tisane, couleur
        violacée et légèrement scintillante est connu pour appaiser les esprits
        et faciliter le sommeil. C'est un produit consommé par la plupart des
        érudits et des chefs d'états qui ont un sommeil troublé par le travail
        ou les décisions passées.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Calmant</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Contrôle +1</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
