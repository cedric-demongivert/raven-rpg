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
import { Runes } from './runes'
import { Spells } from './spells'

export function Magic () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic</SubjectIdentifier>
      <SubjectKeyword>magie</SubjectKeyword>
      <SubjectTitle>Magie</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Runes />
        <Spells />
      </SubjectContent>
    </Subject>
  )
}
