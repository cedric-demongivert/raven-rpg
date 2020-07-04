import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

export const BloodyBells : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Sanguine')
    .setIdentifier('bloody-bells')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Sanguine')
    .setDescription(
      <p>
        La sanguine est une forme de muguet beaucoup plus fourni aux cloches
        rouges virant au jaune que l'on retrouve dans certaines forêt. C'est
        une plante extrêmement toxique entraînant une augmentation de la
        pression artérielle. Elle peut être utilisée pour la fabrication de
        poisons hémoragiques.
      </p>
    )
    .build()
)
