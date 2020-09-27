import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { FireBreath } from './FireBreath'
import { Sandblast } from './Sandblast'
import { Liquefaction } from './Liquefaction'

export function Spells () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-spells</SubjectIdentifier>
      <SubjectTitle>Sorts</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Liquefaction />
        <Sandblast />
        <FireBreath />
      </SubjectContent>
    </Subject>
  )
}
