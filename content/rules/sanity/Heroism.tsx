import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Heroism () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-heroism</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Héroïsme</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand le désespoir amène à une forme d'héroïsme, la victime doit alors
          choisir un comportement à adopter dans la liste suivante :
        </p>

        <p>
          <strong>Baroud d'honneur.</strong> Vous allez mourrir, certes, mais
          vous partirez en beauté. Quand un personnage décide de réaliser un
          baroud d'honneur il devient insensible et ne peut plus fuir le combat.
          Le personnage gagne 3D6 * 3 points de vie supplémentaire pour
          l'entièreté de la scène d'action, la limite de dégâts imposée par la
          constitution du personnage ne prime plus. Cependant celui-ci ne peut
          plus connaître exactement son nombre de points de vie. Si quand le
          combat est terminé, le personnage se retrouve avec un nombre de points
          de vie inférieur à zéro à cause de la perte des points de vie bonus,
          ceux-ci sont ramenés à zéro, le personnage sombre alors dans le coma
          est l'objet de 1D4 blessures graves tirées au hasard. S'il sort
          indemme du baroud d'honneur, le personnage subit 1D4 blessures légères
          aléatoires.
        </p>

        <p>
          <strong>Pas un de plus.</strong> Vous le réalisez, vous avez déjà trop
          perdu jusqu'à maintenant, et, si cette confrontation doit finir en
          bain de sang, vous ne laisserez pas un allié de plus tomber devant
          vous, dussiez-vous mourrir en essayant. Quand un personnage décide
          qu'il n'y aura pas une victime de plus, il devient insensible et ne
          peut plus fuir le combat. Aussi, le personnage est libéré des
          contraintes d'initiative pour l'entièreté de la bataille et ne peut
          plus agir librement qu'une unique fois par tour, quand il le désire
          et-ce sans justification. Quand un allié accessible subit une
          aggression le personnage DOIT venir à son secours en chargeant
          l'adversaire responsable de l'aggression juste avant que celle-ci
          n'aie lieu. Si l'aggresseur est hors de sa portée le joueur DOIT tout
          de même réaliser une action en chargeant l'ennemi qui lui est le plus
          proche, même s'il est théoriquement innaccessible. Un personnage
          subissant ce statut est considéré comme possèdant toujours au minimum
          1 coup par action et toutes ses actions visant à toucher un adversaire
          se voient attribuer un bonus de +2. De plus, quand le personnage
          réagit à une aggression, son mouvement est TOUJOURS considéré comme
          une charge peut importe la distance d'attaque. Cependant, quand un
          personnage décide de dépasser ainsi ses propres limites physiques, il
          brûle évidemment son propre corps à chaque nouvelle action prise. A
          chaque nouvelle action effectué lors d'un tour de jeu, le personnage
          doit réaliser un test d'opposition entre son score normal d'initiative
          et un degré de difficulté équivalent à 5 points plus 5 points par
          nombre d'action déjà jouées durant le tour en cours. Si le test
          échoue, le personnage subit 1D4 points de dégâts bruts.
        </p>
      </SubjectContent>
    </Subject>
  )
}
