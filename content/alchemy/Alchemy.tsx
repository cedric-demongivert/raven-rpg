import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../components/subject/SubjectSummary'
import { SubjectContent } from '../../components/subject/SubjectContent'
import { SubjectTitle } from '../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../components/subject/SubjectIdentifier'
import { Subject } from '../../components/subject/Subject'
import { LocalSummary } from '../../components/LocalSummary'

import { Introduction } from './Introduction'
import { EtherPoisoning } from './EtherPoisoning'
import { Processing } from './Processing'

export function Alchemy () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>alchemy</SubjectIdentifier>
      <SubjectKeyword>Alchimie</SubjectKeyword>
      <SubjectTitle>Alchimie</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <EtherPoisoning />
        <Processing />
      </SubjectContent>
    </Subject>
  )
}
