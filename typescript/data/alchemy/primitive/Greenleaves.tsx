import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'
import { AlchemicTransformation } from '../../../alchemy/AlchemicTransformation'

export const Greenleaves : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Verderelle')
    .setIdentifier('green-leaves')
    .addKeyword('Alchimie')
    .addKeyword('Matière')
    .addKeyword('Élément primitif')
    .addKeyword('Verderelle')
    .setDescription(
      <p>
        La verderelle est une espèce de plante grimpante formant des petites
        feuilles rondes capable de retenir les goûtes de pluies. Extrêmement
        toxique elle est principalement utilisée dans la production d'élixir
        de verderelle, une solution de dernier recours pour drainer l'éther
        d'un corps malade.
      </p>
    )
    .build()
)
