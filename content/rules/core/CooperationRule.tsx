
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
          L'acteur d'une auto-résolution ou d'une résolution par opposition
          l'autorisant peut se faire aider par une ou plusieurs tierce partie.
          Cette situation est alors appellée une résolution en coopération. En
          cas de coopération il y a toujours un acteur choisi au préalable qui
          sera chargée de résoudre le test et d'organiser les opérations, les
          tiers voulant coopérer à la réussite de l'acteur peuvent alors lui
          faire profiter d'un bonus dégressif en fonction de leur expertise
          propre.
        </p>

        <p>
          L'organisation de la coopération ce fait par étape, à chaque étape,
          une nouvelle tierce partie peut proposer son aide au groupe déjà
          préparé. Pour ce faire le tiers souhaitant coopérer doit avoir une
          expertise au moins équivalente à la moitiée de l'expertise du groupe.
          Si un tiers peut rejoindre le groupe, l'expertise de celui-ci devient
          équivalente à l'expertise de l'acteur de la résolution, plus le quart
          de l'expertise du premier membre du groupe, plus le sixième de
          l'expertise du second membre du groupe, plus le huitième de
          l'expertise du troisième membre du groupe, et ainsi de suite.
        </p>

        <p>
          Dans certaines situations la coopération peut avoir des effets
          supplémentaires comme une réduction du temps nécéssaire à la
          production d'une arme par exemple. Dans ce cas précis, l'action doit
          préciser les bonus résultant d'une coopération dans sa description.
        </p>
      </SubjectContent>
    </Subject>
  )
}
