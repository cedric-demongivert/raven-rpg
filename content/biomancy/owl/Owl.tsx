import React from 'react'
import { ReactElement } from 'react'

import { SubjectSummary } from '../../../components/subject/SubjectSummary'
import { SubjectContent } from '../../../components/subject/SubjectContent'
import { SubjectTitle } from '../../../components/subject/SubjectTitle'
import { SubjectKeyword } from '../../../components/subject/SubjectKeyword'
import { SubjectIdentifier } from '../../../components/subject/SubjectIdentifier'
import { Subject } from '../../../components/subject/Subject'
import { LocalSummary } from '../../../components/LocalSummary'

import { HunterMask } from './HunterMask'
import { SilentCoat } from './SilentCoat'
import { OwlDance } from './OwlDance'
import { OwlStand } from './OwlStand'
import { OwlWeaponry } from './OwlWeaponry'

export function Owl () : ReactElement {
  return (
    <Subject>
      <SubjectIdentifier>biomancy-totems-owl</SubjectIdentifier>
      <SubjectKeyword>Biomancie</SubjectKeyword>
      <SubjectKeyword>Hiboux</SubjectKeyword>
      <SubjectTitle>Hiboux</SubjectTitle>
      <SubjectSummary>

      </SubjectSummary>
      <SubjectContent>
        <LocalSummary />

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <SilentCoat />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <HunterMask />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-12 col-lg-6'>
            <OwlDance />
          </div>
          <div className='col-xs-12 col-lg-6'>
            <OwlStand />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-xs-12 col-lg-6'>
            <OwlWeaponry />
          </div>
        </div>
      </SubjectContent>
    </Subject>
  )
}
