import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const ParagonBlessing : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Bénédiction du parangon')
    .setIdentifier('paragon-infusion')
    .setDescription(
      <>
        <p>
          La bénédiction du parangon est une décoction de lys azuré dans l'eau.
          C'est un liquide de couleur bleu foncé qui préserve du doute et qui
          facilite le maintient d'une posture imposante pendant les combats.
          La bénédiction du parangon est un vieux tonique utilisé dans certaines
          familles noble pour sa supposée capacitée à préserver la pureté du sang.
        </p>

        <p>
          <strong>Héroïsme.</strong> Un personnage héroïque inspire ses pairs en
          combat par sa grâce et la pureté de sa posture de combat. Toute
          personne dans le camp du personnage héroïque gagne un bonus de
          contrôle de 1 point par niveau de concentration de l'effet héroïsme.
          En cas d'éffondrement mental, un personnage sous effet de l'héroïsme
          est immunisés des afflictions et ne peut développer qu'une vertue.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de l'épée longue +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise de la lance +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Héroïsme</>)
        .setCost(1)
        .setDuration(<>1<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .build()
)
