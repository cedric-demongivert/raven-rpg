import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { Spell } from '../../../components/Spell'

export function FireBreath () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-spells-fire-breath</SubjectIdentifier>
      <SubjectTitle>Vent de flamme</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Spell
          runes={['zet', 'semet', 'ket', 'yemet']}
          rows={2}
        />

        <p className='text-center ipa'>
          [zɛt se.mɛt kɛt je.mɛt]
        </p>
      </SubjectContent>
    </Subject>
  )
}
