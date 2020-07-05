import React from 'react'

import { Unit } from '../../../../components/Unit'

import { AlchemicMaterial } from '../../../alchemy/AlchemicMaterial'
import { AlchemicProperty } from '../../../alchemy/AlchemicProperty'

export const GreenleavesPurifier : AlchemicMaterial = (
  AlchemicMaterial
    .builder()
    .setName('Élixir de verderelle')
    .setIdentifier('greenleaves-purifier')
    .setDescription(
      <>
        <p>
          L'élixir de verderelle est un liquide blanc perle obtenu après la
          fermentation de verderelle dans l'eau. Aussi apellée lait du passeur,
          l'élixir de verderelle est une drogue de dernier recours pour purifier
          les corps malade. Utiliser de l'élixir de verderelle est toujours un
          paris risqué, car le liquide peut toujours provoquer la mort des corps
          trop infectés.
        </p>

        <p>
          <strong>Purification de verderelle.</strong> Toute purification de
          verderelle nécéssite de passer un test contre son intoxication. Si le
          sujet de l'effet réalise un score inférieur ou égal à son niveau
          d'intoxication divisé par trois sur un dé 100 il meurt alors
          immédiatement dans d'atroces souffrances.
        </p>

        <p>
          Si l'individu sujet à la purification de verderelle réussi son
          premier test, le processus de purification commence. Il est alors
          immédiatement l'objet d'une fièvre qu'il subira jusqu'à la fin de
          l'effet de l'elixir. Chaque jour qui s'ensuit, le joueur doit alors
          passer un test d'opposition entre sa constitution et un degré de
          difficulté équivalent à 6 points plus son niveau d'intoxication divisé
          par 2. Si le test échoue le personnage sombre immédiatement dans le
          coma et doit donc être stabilisé.
        </p>

        <p>
          Toute heure passé sous l'effet de la verderelle compte triple pour
          la réduction de l'intoxication à l'éther. Tous les effets de
          paralysie, d'empoisonement, de rage et de somnifère sont immédiatement
          drainés par la verderelle et le personnage est insensible à la maladie
          pendant toute la durée de la purification.
        </p>

        <p>
          Un personnage en état de purification vie avec un corps complètement
          déréglé, mange de manière complètement ératique et doit boire
          beaucoup pour éviter de se désydrater.
        </p>
      </>
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Purification de verderelle</>)
        .setCost(0)
        .setDuration(<>2<Unit>h</Unit> × Qa</>)
        .build()
    )
    .addProperty(
      AlchemicProperty
        .builder()
        .addEffect(<>Pouvoir -2</>)
        .setCost(0)
        .setDuration(<>10<Unit>m</Unit> × Qa</>)
        .build()
    )
    .build()
)
