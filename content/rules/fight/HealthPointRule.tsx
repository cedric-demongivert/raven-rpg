import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function HealthPointRule () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>rules-fight-health-point</SubjectIdentifier>
      <SubjectKeyword>Règle</SubjectKeyword>
      <SubjectKeyword>Règle de combat</SubjectKeyword>
      <SubjectKeyword>Point de vie</SubjectKeyword>
      <SubjectTitle>Points de vie</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          Les points de vie bruts d'un personnage sont égaux à 10 plus son nombre de
          points de constitution. Si un personnage accumule autant de dégât qu'il a
          de points de vie il tombe dans le coma et ne peut plus agir. Si les dégâts
          subis viennent à dépasser 150% de ses points de vie bruts il meurt.
        </p>
      </SubjectContent>
    </Subject>
  )
}
