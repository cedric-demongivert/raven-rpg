import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const CatGrace : Feat = (
  Feat
    .builder()
    .setIdentifier('cat-grace')
    .setName('Vol contrôlé (?)')
    .addKeyword('atout')
    .addKeyword('vol contrôlé')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Dextérité 14+</>)
        .addRequirement(<>Acrobatie 15+</>)
        .setDescription(
          <p>
            Si une acrobatie visant un autre personnage échoue alors l'acteur de
            l'acrobatie peut tenter de se rattraper in-extremis en passant un
            test d'acrobatie de difficulté 18 afin d'annuler tous les effets de
            la parade ou de l'esquive de sa victime. Si l'acteur réussi son jet,
            la parade ou l'esquive de sa victime est annulée et décomptée de la
            quantité de parade ou d'esquive de son tour.
          </p>
        )
        .build()
    )
    .build()
)
