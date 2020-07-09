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
          En biomancie, quand l'on sélectionne une créature pour en extraire des
          capacités, ont dit alors que l'on suit un <strong>totem</strong>. Tout
          mutant est associé à un ou plusieurs totem et à chaque totem est
          associé une série de mutations. Le loup, l'ours, le hiboux, le
          serpent, l'aigle, le renard et le corbeau sont des exemples d'animaux
          totem. Plus un mutant suit de totem différents, plus il prend le
          risque subir une <strong>dissonance totémique</strong>. Le corp des
          personnages en état de dissonance deviennent un champ de bataille où
          chaque totem tente de prendre le dessus sur les autres, le tout
          provoquant une spirale infernale et chaotiques de mutations répétées.
          Autant dire que la créature qui en résulte est loin d'être civilisée
          et contrôlable.
        </p>

        <p>
          Une <strong>mutation</strong> est un changement qui éloigne le mutant
          un peut plus de l'homme et le rapproche progressivement de la bête.
          Chaque mutation apporte ainsi sont lot d'avantages passifs acquis en
          tout temps, ainsi que des attributs qui apparaissent en fonction du
          niveau de <strong>bestialité</strong> du mutant sur le moment. Plus un
          mutant mute, plus il est sujet à <strong>l'appel</strong>, c'est à
          dire à la tentation de s'abandonner définitivement à la liberté
          sauvage et meurtrière de la course à l'évolution. Les individus qui
          scède à l'appel deviennent des bêtes assoiffées de sang et de violence
          qui ne suivent plus que leurs instincts les plus primitifs.
        </p>

        <p>
          Finalement le <strong>mutagène</strong> est le moteur central de la
          biomancie, c'est grâce à ce produit alchimique qu'il est possible de
          muter. Sans mutagène, pas d'évolution contrôlée.
        </p>
      </SubjectContent>
    </Subject>
  )
}
