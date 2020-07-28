import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Madness () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-sanity-madness</SubjectIdentifier>
      <SubjectKeyword>règle</SubjectKeyword>
      <SubjectTitle>Folie</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand le désespoir amène à la folie, la victime doit alors choisir un
          comportement à adopter parmis la liste des folies suivante :
        </p>

        <p>
          <strong>Terreur.</strong> Parfois l'instinct de survie est bien plus
          fort que la meilleure des amitiés. Quand un personnage sombre dans la
          peur la plus glaçante il double sa vitesse de déplacement mais est
          obligé de fuir la scène de combat à toutes jambes quitte à se jetter
          dans la gueule d'un piège, ou a se retrouver à des kilomètres de ses
          compagnons. Un personnage qui ne peut plus fuir est obligé de se
          recroqueviller en attendant son heure. Vous avez le droit d'hurler et
          de pleurer si cela peut vous y aider.
        </p>

        <p>
          <strong>Colère.</strong> Décidément, cette réalité n'a jamais été de
          votre côté, et vous la contesterez jusqu'au bout en agitant vos bras
          et en vidant vos poumons si nécéssaire. Un personnage en état de
          colère profonde ne peut plus réagir aux appels de ses alliés, ne fuira
          pas le champ de bataille et ne pourra pas réaliser une action sans
          frapper ou achever un adversaire. Si le personnage doit choisir un
          adversaire à charger, il doit au préalable tenter une résolution par
          opposition entre son score de contrôle et un degré de difficulté de 10
          points, en cas d'échec, il est obligé de frapper le personnage le plus
          proche. Vous infligez un point de dégâts supplémentaire tous les deux
          points de dégâts infligés.
        </p>

        <p>
          <strong>Orgueil.</strong> L'enfer, c'est les autres, et une fois
          encore vous subissez leur incompétence crasse. Si vous êtes à moins de
          neuf mètres d'un allié que vous pouvez percevoir, vous ne pouvez
          résister à l'envie de l'insulter, celui-ci doit alors réussir un test
          de volonté d'un degré de difficulté de 10 points pour ne pas perdre
          deux points de volonté par round. De plus, vous êtes déconcentré par
          cette présence non-souhaité ce qui entraîne un malus de deux points à
          tout vos jets. Si vous êtes seul dans un rayon de neuf mètres, vous
          gagnez deux points bonus à l'ensemble de vos jets.
        </p>

        <p>
          <strong>Bestialité.</strong> Les humains sont bien trop faible pour
          survivre, vous l'avez toujours sû, il est temps de regner cette part
          de vous dont vous avez toujours voulu vous séparer. Votre bestialité
          monte directement à 20 points et ce jusqu'à la fin du combat. Vous
          êtes obligé de sauvagement sacager l'ensemble des corps morts que vous
          croisez, si vous tentez de restreindre vos instincts vous perdez
          immédiatement 1D4 points de vie dû aux scarifications que vous vous
          infligez de frustration. A la fin du combat vous reprenez votre forme
          normale, sombrez dans le coma, et subissez 1D4 blessures légères
          aléatoires.
        </p>
      </SubjectContent>
    </Subject>
  )
}
