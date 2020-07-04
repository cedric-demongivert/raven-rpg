import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const GoldenSun : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Soleil d\'or')
    .setIdentifier('golden-sun')
    .setDescription(
      <>
        <p>
          Le soleil d'or, aussi appellée liqueur du soleil, est le résultat
          de la macération d'un jus de baies d'hélénite pendant minimum deux
          semaines. Le résultat est une liqueur dorée légèrement luminescente au
          goût très sucré. On dit de ce produit, très appréciée pour son goût
          unique et son effet euphorisant, qu'il est surtout capable de
          maîtriser le destin.
        </p>

        <p>
          <strong>Porte bonheur.</strong> Le soleil d'or permet au sujet de
          l'effet de profiter d'un point de destin supplémentaire pendant une
          courte période.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Porte bonheur</>)
        .setCost(1)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Contrôle -2</>)
        .setCost(0)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de la fouille +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
