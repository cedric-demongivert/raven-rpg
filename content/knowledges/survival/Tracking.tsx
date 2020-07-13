import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Tracking () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>knowledges-survival-traking</SubjectIdentifier>
      <SubjectKeyword>Connaissance</SubjectKeyword>
      <SubjectKeyword>Pistage</SubjectKeyword>
      <SubjectTitle>Pistage</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <p>
          La connaissance du pistage permet à un personnage de suivre les traces
          d'animaux, de monstres ou d'hommes. Cette connaissance peut aussi
          aider à suivre des individus en milieux urbains. Le pistage est une
          compétence importante pour tout chasseur qui se respecte, qu'il
          cherche du gibier, ou des têtes.
        </p>
      </SubjectContent>
    </Subject>
  )
}
