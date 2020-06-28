import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

export function Helenite () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy-primitive-material-helenite</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectKeyword>Matière</SubjectKeyword>
      <SubjectKeyword>Élément primitif</SubjectKeyword>
      <SubjectKeyword>Hélénite</SubjectKeyword>
      <SubjectTitle>Hélénite</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <p>
          L'hélénite est un arbustre sauvage produisant des petites baies
          rondes dorées légèrement translucide. C'est une plante rare, et la
          coutume veut que consommer ces fruits porte chance.
        </p>
      </SubjectContent>
    </Subject>
  )
}
