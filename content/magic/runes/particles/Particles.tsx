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
import { Ket } from './Ket'
import { Met } from './Met'
import { Set } from './Set'
import { Tet } from './Tet'
import { Yet } from './Yet'
import { Zet } from './Zet'

export function Particles () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>magic-runes-particles</SubjectIdentifier>
      <SubjectKeyword>rune</SubjectKeyword>
      <SubjectTitle>Particules</SubjectTitle>
      <SubjectSummary>
      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <Introduction />

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Ket />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Met />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Set />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Tet />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <Yet />
          </div>
          <div className='col-xs-12 col-md-6'>
            <Zet />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
