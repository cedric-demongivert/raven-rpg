import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'

import { Light } from './Light'
import { Medium } from './Medium'
import { Heavy } from './Heavy'

export function Armors () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>items-armors</SubjectIdentifier>
      <SubjectKeyword>armure</SubjectKeyword>
      <SubjectTitle>Armures</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Light />
        <Medium />
        <Heavy />
      </SubjectContent>
    </Subject>
  )
}
