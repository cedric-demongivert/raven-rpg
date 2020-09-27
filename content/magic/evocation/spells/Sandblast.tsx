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

export function Sandblast () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-evocation-spells-sand-blast</SubjectIdentifier>
      <SubjectTitle>Jet de sable</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <Spell
          runes={['zet', 'semet', 'ket', 'kemet']}
          rows={2}
        />

        <p className='text-center ipa'>
          [zɛt se.mɛt kɛt ke.mɛt]
        </p>

      </SubjectContent>
    </Subject>
  )
}
