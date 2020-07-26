import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function ComaRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-coma</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Coma</SubjectKeyword>
      <SubjectTitle>Coma</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Quand un personnage accumule autant de dégâts qu'il possède de points
          de vie il tombe alors immédiatement dans le coma. Un personnage qui
          tombe dans le coma des suites d'une attaque est automatiquement
          affligé d'une blessure grave liée à l'arme responsable du coup final.
        </p>

        <p>
          Le coma est un statut intermédiaire entre la vie et la mort qui peut
          aussi être la conséquence d'un sort ou de certains poisons. Le coma
          est un état critique impliquant une perte de conaissance associée à
          une aggravation de certains statuts. Un personnage dans le coma tombe
          à terre, ne peut plus effectuer d'actions et est considéré sans
          défense et peut donc faire l'objet d'une tentative d'exécution.
        </p>

        <p>
          Tout coma est associé à un degré de difficulté calculé en fonction de
          l'état général du personnage commateux. Le degré de difficulté d'un
          coma est calculé de la manière suivante :
        </p>

        <ul>
          <li>
            Les paires de points de dégât ajoutent chacune 1 point de
            difficulté.
          </li>
          <li>
            Les blessures légères ajoutent chacune 2 points de difficulté.
          </li>
          <li>
            Les blessures graves ajoutent chacune 5 points de difficulté.
          </li>
          <li>
            Certaines causes de coma ainsi que certains status peuvent aussi
            ajouter des points de difficulté, dans ce cas le nombre de point à
            ajouter doit apparaitre dans la description du sort, du poison ou de
            l'état.
          </li>
        </ul>

        <p>
          Un personnage peut sortir de l'état de coma après un certain temps de
          repos équivalent au degré de difficulté du coma retranché du bonus de
          constitution du personnage le tout multiplié par 4. Certains status
          comme l'empoisonement ou le saignement interdisent à un personnage
          commateux de se rétablir seul et requiert qu'une tierce personne le
          stabilise au préalable.
        </p>

        <p>
          Stabiliser un personnage commateux est une action complexe nécéssitant
          un calme relatif, des connaissances précises en premiers soins et un
          bon quart d'heure de travail. Un personnage effectuant une tentative
          de stabilisation doit réussir un test d'opposition entre ses
          connaissances en premiers soins et le degré de difficulté du coma. En
          cas de succès le processus naturel de guérison du coma reprend et la
          durée nécéssaire pour perdre naturellement le status est divisé par
          deux.
        </p>
      </SubjectContent>
    </Subject>
  )
}
