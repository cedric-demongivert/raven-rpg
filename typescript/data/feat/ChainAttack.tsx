import React from 'react'

import { Feat } from '../../feat/Feat'
import { FeatLevel } from '../../feat/FeatLevel'

export const ChainAttack : Feat = (
  Feat
    .builder()
    .setIdentifier('chain-attack')
    .setName('Attaque en chaîne')
    .addKeyword('atout')
    .addKeyword('épée courte')
    .addKeyword('épée bâtarde')
    .addKeyword('dextérité')
    .addKeyword('attaque en chaîne')
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes ou Épées batardes 5+</>)
        .setDescription(
          <p>
            Peut échanger lors d'une attaque à outrance, à l'épée courte ou à
            l'épée batarde, une parade contre une attaque supplémentaire. Les
            attaques supplémentaires se résolvent comme des attaques normales
            avec un malus de 10% par attaque déjà portée.
          </p>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 10+</>)
        .addRequirement(<>Attaque en chaîne I</>)
        .setDescription(
          <>
            <p>
              Peut échanger lors d'une attaque à outrance à l'épée courte jusqu'à
              deux parades contre une attaque supplémentaire. Les attaques
              supplémentaires se résolvent comme des attaques normales avec un
              malus de 10% par attaque déjà portée.
            </p>

            <p>
              Peut échanger lors d'une attaque à outrance à l'épée batarde une
              parade contre une attaque supplémentaire. Les attaques
              supplémentaires se résolvent comme des attaques normales avec un
              malus de 10% par attaque déjà portée.
            </p>
          </>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 15+</>)
        .addRequirement(<>Dextérité 12+</>)
        .addRequirement(<>Attaque en chaîne II</>)
        .setDescription(
          <>
            <p>
              Peut échanger lors d'une attaque à outrance à l'épée courte
              jusqu'à trois parades contre une attaque supplémentaire. Les
              attaques supplémentaires se résolvent comme des attaques normales
              avec un malus de 10% par attaque déjà portée.
            </p>

            <p>
              Peut échanger lors d'une attaque à outrance à l'épée batarde une
              parade contre une attaque supplémentaire. Les attaques
              supplémentaires se résolvent comme des attaques normales avec un
              malus de 10% par attaque déjà portée.
            </p>
          </>
        )
        .build()
    )
    .addLevel(
      FeatLevel
        .builder()
        .addRequirement(<>Épées courtes 20+</>)
        .addRequirement(<>Dextérité 18+</>)
        .addRequirement(<>Attaque en chaîne III</>)
        .setDescription(
          <>
            <p>
              Peut échanger lors d'une attaque à outrance à l'épée courte
              jusqu'à quatre parades contre une attaque supplémentaire. Les
              attaques supplémentaires se résolvent comme des attaques normales
              avec un malus de 10% par attaque déjà portée. Il est toujours
              possible d'échanger une seule parade à l'épée batarde contre une
              attaque supplémentaire.
            </p>

            <p>
              Peut échanger lors d'une attaque à outrance à l'épée batarde une
              parade contre une attaque supplémentaire. Les attaques
              supplémentaires se résolvent comme des attaques normales avec un
              malus de 10% par attaque déjà portée.
            </p>
          </>
        )
        .build()
    )
    .build()
)
