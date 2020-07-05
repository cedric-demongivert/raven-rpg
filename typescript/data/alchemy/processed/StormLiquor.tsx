import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const StormLiquor : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Liqueur des tempêtes')
    .setIdentifier('storm-liquor')
    .setDescription(
      <>
        <p>
          La liqueur des tempêtes est le résultat d'une macération de marterage
          pendant au minimum deux semaines. Le résultat est un liquide herbacé
          parcouru de petits éclairs blancs. La liqueur des tempêtes est un
          poison connu pour amplifier la colère de l'individu qui la consome au
          point qu'il ne deviennent plus qu'une bête féroce assoiffée de sang.
          Ont dit de ceux consumé par la rage de la liqueur des tempêtes qu'ils
          meurent souvent abbatu d'un éclair.
        </p>

        <p>
          <strong>Rage.</strong> La rage est un statut durant lequel un individu
          succombe à une forme de colère pure jaillissant du plus profond de ses
          entrailles. La victime de la rage perd toujours un round pendant
          lequel il se sent perdre progressivement le contrôle de lui-même, il
          peut tenter d'y résister moyennant un jet d'opposition entre son
          contrôle et un degré de difficulté de 15 points. Le degré de
          difficulté peut être réduit de 5 points si la victime est déjà sous
          l'effet d'un calmant.
        </p>

        <p>
          Un personnage en état de rage gagne 4 points de force, 4 points
          d'agilité, 2 points de maîtrise dans tous les types d'armes et 1 point
          de vie supplémentaire tous les deux points de vie qu'il possède déjà.
          Un personnage en état de rage ne se contrôle plus et ne sait plus
          faire la différence entre ami et ennemis. Un personnage subissant la
          rage cherchera donc toujours à frapper l'individu le plus proche de
          lui. La victime de l'effet de la rage peut toujours tenter de dévier
          de cible en passant au deuxième individu le plus proche de lui, puis
          au troisième et ainsi de suite en réalisant à chaque fois un jet
          d'opposition entre son contrôle et un degré de difficulté de 15
          points plus 2 points par personnage déjà ignoré de cette manière
          durant le round. Un personnage sous l'effet de rage ne peut plus
          utiliser ni de consommables ni de sorts.
        </p>

        <p>
          La rage peut être calmée via l'utilisation d'un effet calmant. Le
          joueur peut alors tenter de résister au calmant en réalisant un jet
          de volonté de degré de difficulté de 5 points plus 5 points par charge
          de calmant déjà injectée. Une fois la rage passée le personnage doit
          réaliser un jet de constitution de degré de difficulté 15, si ce jet
          échoue, le personnage devient alors fatigué. Quand un personnage en
          état de rage reviens à la normale, il perd alors tous les points de
          vie bonus qu'il possédait, si le nombre de points de vie qui en
          résulte est alors inférieure à zéro, les points de vie du personnage
          sont alors considérés comme valant zéro.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Rage</>)
        .setCost(1)
        .setDuration(<>2<Unit>r</Unit> + 1<Unit>r</Unit> × ¼Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Chance -2</>)
        .setCost(0)
        .setDuration(<>5<Unit>m</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Bestialité +2</>)
        .setCost(1)
        .setDuration(<>~</>)
        .build()
    )
    .build()
)
