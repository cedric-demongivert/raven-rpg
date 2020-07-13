import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'

export function Mutation () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-mutation</SubjectIdentifier>
      <SubjectKeyword>Mutagène</SubjectKeyword>
      <SubjectKeyword>Mutation</SubjectKeyword>
      <SubjectTitle>Totem, mutagène et mutation</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Bien qu'elle se targue de jouer le jeu de l'évolution à la vitesse
          supérieure, la biomancie n'invente jamais rien de nouveau, et c'est en
          réalité plus l'art de s'attribuer les capacités des autres que celui
          d'en créer de nouvelles du néant. Dans ce cas précis, l'on parle bien
          des capacités d'autres créatures du vivant, des animaux, et, comme ce
          plait la civilisation à faire la distinction, des monstres.
        </p>

        <p>
          En biomancie, quand l'on désire s'attribuer les capacités d'une
          créature en particulier, l'ont dit alors que l'on suit un <strong>
          totem</strong>. Tout biomancien, est associé à un ou plusieurs totem.
          Le loup, l'ours, le hiboux, le serpent, l'aigle, le renard et le
          corbeau sont des exemples d'animaux totem. Plus un mutant suit de
          totem différents, plus il prend le risque subir une <strong>dissonance
          évolutive</strong>. Le corp d'un personnage en état de dissonance
          évolutive devient un champ de bataille où chaque totem tente de
          prendre le dessus sur les autres, le tout provoquant une spirale
          infernale et chaotiques de transformations répétées. L'esprit du
          biomancien survit rarement à une telle pression et quand le corps de
          la victime se stabilise vaguement il ne reste alors qu'une bête
          difforme et incontrôlable.
        </p>

        <p>
          Une <strong>mutation</strong> est un changement qui éloigne le
          biomancien un peut plus de l'homme et le rapproche progressivement de
          son totem. Plus un biomancien mute, plus il est sujet à <strong>
          l'appel</strong>, c'est à dire à la tentation d'abandonner
          définitivement son corps et son esprit à son ou ses totem. Les
          individus qui scèdent à l'appel deviennent des bêtes assoiffées de
          sang et de violence qui ne suivent plus que leurs instincts les plus
          primitifs. Les créatures résultant de ce processus sont alors
          appellés des échoués.
        </p>

        <p>
          Finalement le <strong>mutagène</strong> est le moteur de la biomancie,
          c'est grâce à ce produit alchimique qu'il est possible de muter. Sans
          mutagène, pas d'évolution contrôlée. Les mutagènes doivent être
          calibrés avant d'être ingérés, c'est à dire associés à un totem. Un
          mutagène non calibré est dit libre et est considéré comme appartenir
          à un totem au hasard à l'ingestion. Les mutagènes peuvent être trouvés
          durant une aventure, mais le plus simple reste de les fabriquer en
          chassant des avatars.
        </p>
      </SubjectContent>
    </Subject>
  )
}
