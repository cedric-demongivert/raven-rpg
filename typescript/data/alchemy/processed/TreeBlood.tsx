import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const TreeBlood : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Sang d\'ent')
    .setIdentifier('wind-syrup')
    .setDescription(
      <>
        <p>
          Le sang d'ent, aussi appellée liqueur d'écorce, est le résultat d'une
          macération d'écorce de pandore préalablement broyée et dissoute dans
          l'eau, il faut au minimum deux semaines de macération. Le résultat est
          un sirop violet sombre virant sur le rouge à la texture sanguine.
        </p>

        <p>
          Consommer cette liqueur provoquent l'apparition de spirales de tailles
          variables sous la peau lui donnant progressivement l'allure d'une
          couche d'écorce. Cette phase de pousse, telle que décrite dans les
          écrits des premiers hommes, est réputée particulièrement désagréable,
          mais le résultat, c'est à dire une protection naturelle temporaire,
          vaut bien largement le sacrifice d'une certaine aisance de mouvement
          dû à la raideur de la croute protectrice. Quand le sang d'ent arrête
          de faire effet la peau fane et tombe exposant une nouvelle couche de
          peau neuve.
        </p>

        <p>
          <strong>Peau d'écorce.</strong> La peau d'écorce est un effet complexe.
          Après un round de pousse, elle apporte 4 points d'armure
          supplémentaire au sujet de l'effet pour 1 <Unit>round</Unit> × ¼Qa.
          Cette armure est considéré comme à même la peau, et est donc sous
          toute couche d'armure supplémentaire. Quand la peau d'écorce fane, le
          personnage doit réussir un jet d'opposition de constitution de degré
          de difficulté 15, si le jet d'opposition échoue le personnage subit le
          statut <em>fatigué</em> à cause du sang drainé par le champignon. Ce
          statut peut être supprimé temporairement par la consommation d'un
          effet tonique. Quand les effets de la peau d'écorce disparraissent le
          sujet de l'effet perds l'ensemble des points d'armure restant relatifs
          à la peau d'écorce.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Peau d'écorce</>)
        .setCost(1)
        .setDuration(<>1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Dextérité -2</>)
        .setCost(0)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Maîtrise des armures lourdes +2</>)
        .setCost(1)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
