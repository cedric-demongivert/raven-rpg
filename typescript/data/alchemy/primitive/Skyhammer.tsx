import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

export const Skyhammer : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Marterage')
    .setIdentifier('skyhammer')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Marterage')
    .setDescription(
      <p>
        La marterage est une forme de houx que l'ont dit ne fleurire qu'après
        le passage d'un orage. Les fruits de marterage sont des espèces de
        cône formée de pétales satinés assez épaisses de couleur mauve veiné
        de canaux cyan. C'est une plante fortifiante mais qui mal utilisée
        peut provoquer des épisodes de rage furieuse ou des crises de spasmes
        douloureux.
      </p>
    )
    .build()
)
