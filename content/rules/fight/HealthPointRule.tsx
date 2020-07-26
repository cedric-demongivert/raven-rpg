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
          Les points de vie bruts d'une entitée sont égaux à son nombre de
          points de constitution. Une entitée tombe dans le coma si elle
          accumule autant de dégât qu'elle a de points de vie. Une entitée meurt
          si elle accumule une quantitée de dégâts supérieurs ou égaux à 150% de
          sa constitution.
        </p>
      </SubjectContent>
    </Subject>
  )
}
