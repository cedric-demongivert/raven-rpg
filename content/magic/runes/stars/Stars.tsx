import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { Introduction } from './Introduction'
import { Kemet } from './Kemet'
import { Mege } from './Mege'
import { Memet } from './Memet'
import { Metzeter } from './Metzeter'
import { Semet } from './Semet'
import { Temeter } from './Temeter'
import { Yegeter } from './Yegeter'
import { Yemet } from './Yemet'
import { Zemet } from './Zemet'

export function Stars () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-stars</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Étoiles</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />
        <Kemet />
        <Mege />
        <Memet />
        <Metzeter />
        <Semet />
        <Temeter />
        <Yegeter />
        <Yemet />
        <Zemet />
      </SubjectContent>
    </Subject>
  )
}
