import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../components/subject/SubjectSummary'
import { SubjectContent } from '../components/subject/SubjectContent'
import { SubjectTitle } from '../components/subject/SubjectTitle'
import { SubjectKeyword } from '../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../components/subject/SubjectIdentifier'
import { Subject } from '../components/subject/Subject'
import { LocalSummary } from '../components/LocalSummary'

import { FeatSubjects } from '../components/feat/FeatSubjects'
import { Feat } from '../typescript/feat/Feat'

import { ALL } from '../typescript/data/feat'

export function Feats () : ReactElement {
  const all : Feat[] = [].concat(ALL)

  all.sort(function (a : Feat, b : Feat) : number {
    return a.name.localeCompare(b.name)
  })

  return (
    <Subject>
      <SubjectIdentifier>feats</SubjectIdentifier>
      <SubjectKeyword>Feat</SubjectKeyword>
      <SubjectTitle>Atouts</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <FeatSubjects>{ all }</FeatSubjects>
      </SubjectContent>
    </Subject>
  )
}
