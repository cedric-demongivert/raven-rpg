import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Reduction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-transformation-reduction</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Transformation</SubjectKeyword>
      <SubjectKeyword>Réduction</SubjectKeyword>
      <SubjectTitle>Réduction</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          La réduction est une forme dégénérée de distillation qui consiste à
          éliminer les propriétés d'une matière qui bouilleront en premier. Soit
          à dépiler des propriétés de la liste de propriétés d'une matière.
        </p>
      </SubjectContent>
    </Subject>
  )
}
