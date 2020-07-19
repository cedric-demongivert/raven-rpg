import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { Muzzle } from './Muzzle'
import { Skin } from './Skin'
import { Morphology } from './Morphology'
import { Arms } from './Arms'
import { Legs } from './Legs'

export function Bear () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-bear</SubjectIdentifier>
      <SubjectKeyword>Biomancie</SubjectKeyword>
      <SubjectKeyword>Ours</SubjectKeyword>
      <SubjectTitle>Ours</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Morphology />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Skin />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <Muzzle />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <Arms />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <Legs />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
