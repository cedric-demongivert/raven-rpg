import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const GreenleavesCurse : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Malédiction de verderelle (!)')
    .setIdentifier('greenleaves-curse')
    .setDescription(
      <>
        <p>
          La malédiction de verderelle est une décoction de verderelle dans
          l'eau. Le liquide vert clair qui en résulte est un poison violent
          capable de paralyser les individus les plus forts. A un certain degré
          de concentration la malédiction de verderelle peut même faire sombrer
          des boeufs dans un coma profond.
        </p>

        <p>
          <strong>Paralysie.</strong> Un personnage qui subit un effet
          paralytique doit réussir un test d'opposition de constitution contre
          un degré de difficulté équivalent à la qualité du poison. Si le jet
          de constitution réussi, le personnage joue en dernier pour le round
          en cours. Si le jet échoue le personnage perds un nombre de round
          égal à la durée de la paralysie.
        </p>

        <p>
          <strong>Coma.</strong> Un personnage qui subit un effet de coma doit
          réussir un test d'opposition de constitution contre un degré de
          difficulté équivalent à la qualité du poison. Si le jet échoue le
          personnage tombe immédiatement dans le coma.
        </p>

        <p>
          <strong>Mutisme.</strong> Un personnage qui subit un les effets du
          mutisme doit réussir un test d'opposition de constitution contre un
          degré de difficulté équivalent à la qualité du poison. Si le jet
          échoue le personnage ne peut plus communiquer par la parole pendant
          un nombre de round égal à la durée de l'effet du mutisme.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Paralysie</>)
        .setCost(0)
        .setDuration(<>1<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Coma (Concentration x3)</>)
        .setCost(0)
        .setDuration(<>~</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Mutisme</>)
        .setCost(0)
        .setDuration(<>1<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .build()
)
