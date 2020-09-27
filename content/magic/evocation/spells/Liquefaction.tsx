import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../../components/subject/Subject'
import { LocalSummary } from '../../../../components/LocalSummary'

import { Spell } from '../../../../components/Spell'

export function Liquefaction () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-spells-liquefaction</SubjectIdentifier>
      <SubjectTitle>Liquéfaction</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Spell
          runes={['set', 'kemet', 'met', 'zemet', 'zet', 'metzeter']}
          rows={2}
        />

        <p className='text-center ipa'>
          [sɛt ke.mɛt mɛt ze.mɛt zɛt mɛt.ze.tɛʀ]
        </p>
      </SubjectContent>
    </Subject>
  )
}
