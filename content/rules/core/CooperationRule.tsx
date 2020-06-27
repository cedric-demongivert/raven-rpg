
import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function CooperationRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-core-cooperation</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle principale</SubjectKeyword>
      <SubjectKeyword>Coopération</SubjectKeyword>
      <SubjectTitle>Coopération</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Lors d'une auto-résolution ou d'un test d'opposition l'autorisant une
          entitée peut se faire aider par une ou plusieurs entitée tierce. Cette
          situation est alors appellée une résolution en coopération. En cas
          de coopération il y a toujours une entitée maître choisie au préalable
          qui sera chargée de résoudre le test et d'organiser les opérations,
          toute entitée voulant coopérer à la réussite de l'entitée maître peut
          alors lui faire profiter d'un bonus dégressif en fonction de son
          expertise propre.
        </p>

        <p>
          L'organisation de la coopération ce fait par étape, à chaque étape,
          une nouvelle entitée peut proposer son aide au groupe déjà préparé.
          Pour ce faire l'entitée souhaitant coopérer doit avoir une expertise
          au moins équivalente à la moitiée de l'expertise du groupe. Si une
          entitée peut rejoindre le groupe, l'expertise de celui-ci devient
          équivalente à l'expertise de l'entitée maître, plus le quart de
          l'expertise de la première entitée ayant rejoint le groupe, plus le
          sixième de l'expertise de la seconde entitée ayant rejointe le groupe,
          plus le huitième de la troisième entitée ayant rejointe le groupe, et
          ainsi de suite.
        </p>

        <p>
          Dans certaines situations la coopération peut avoir des effets
          supplémantaires comme une réduction du temps nécéssaire à la
          production d'une arme par exemple. Dans ce cas précis, l'action doit
          préciser les bonus résultant d'une coopération dans sa description.
        </p>
      </SubjectContent>
    </Subject>
  )
}
