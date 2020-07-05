import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const MercenaryBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du mercenaire')
    .setIdentifier('bloody-bells-infusion')
    .setDescription(
      <p>
        La bénédiction du mercenaire est une décoction de sanguine dans l'eau.
        C'est un liquide de couleur rouge sang qui améliore les réflexes et qui
        provoque une légère dissociation cognitive entre l'individu qui l'a
        consommé et le réel. C'est un produit qui a été longtemps utilisé par
        les petits groupes de mercenaires en tout genre pour exécuter leur
        contrats de manière machinale.
      </p>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Épée bâtardes +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Haches +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Marteau +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
