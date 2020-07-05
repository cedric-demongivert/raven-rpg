import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const CeruleanInfusion : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Infusion azurée')
    .setIdentifier('cerulean-infusion')
    .setDescription(
      <>
        <p>
          L'infusion azurée est une solution de lys azurés portée à ébulition
          pendant une petite dizaine de minute. Cette infusion est connue pour
          aider les blessures à cicatriser.
        </p>

        <p>
          <strong>Stabilisant.</strong> Équivalent à la réussite automatique
          d'une tentative de stabilisation en cas de coma. La durée d'un coma
          est divisé par deux quand le stabilisant est ingéré. L'utilisation
          multiple du stabilisant ne réduit pas plus la durée du coma.
        </p>

        <p>
          <strong>Régénération.</strong> Le personnage récupère un nombre de
          points de vie équivalent à sa constitution divisée par 4 à la fin de
          chaque journée pendant laquelle l'effet de régénération à cours.
          L'utilisation multiple de la régénération n'augmente pas plus son
          effet. Si l'effet de régénération est concentré le personnage gagne
          alors un point de vie supplémentaire par niveau de concentration. Si
          plusieurs effets de régénération sont ingérés, le plus concentré prime
          sur tous les autres.
        </p>

        <p>
          <strong>Ossature végétale.</strong> Le temps de guérison des fractures
          est divisé par deux. Un personnage sous effet de l'ossature végétale
          peut annuler toute fracture potentielle en réalisant un test
          d'opposition entre sa constitution et un degré de difficulté de 8
          points.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Stabilisant (Qa ≥ 10)</>)
        .setCost(1)
        .setDuration(<>~</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Régénération</>)
        .setCost(1)
        .setDuration(<>1<Unit>j</Unit> + 1<Unit>j</Unit> × ⅕Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Ossature végétale (Liqueur de lys)</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
